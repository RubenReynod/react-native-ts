import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'changeIcon', payload: string }
  | { type: 'changeUser', payload: string }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  const { type } = action;

  switch (type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };
    case 'changeIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'changeUser':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
