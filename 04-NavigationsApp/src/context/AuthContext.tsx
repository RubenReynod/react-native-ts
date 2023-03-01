import React, { createContext, useReducer } from 'react';
import { authReducer } from './AuthReducer';

// Tipado del estado
export interface AuthState {
  isLoggedIn: boolean
  username?: string
  favoriteIcon?: string
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Información a exponer al context
export interface AuthContextProps {
  authState: AuthState
  signIn: () => void
  logout: () => void
  changeIcon: (iconName: string) => void
  changeUser: (userName: string) => void
}

// Crear el context
export const AuthContext = createContext({} as AuthContextProps);

// Exponer el provedor del estado
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const changeIcon = (iconName: string) => {
    dispatch({ type: 'changeIcon', payload: iconName });
  };

  const changeUser = (userName: string) => {
    dispatch({ type: 'changeUser', payload: userName });
  };

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logout,
      changeIcon,
      changeUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
