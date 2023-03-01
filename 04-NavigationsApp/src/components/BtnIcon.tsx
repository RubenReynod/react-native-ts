import React, { FC, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/theme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    name: string
}

export const BtnIcon: FC<Props> = ({ name }) => {
  const { changeIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeIcon(name)}>
        <Icon name={name} size={80} color={colors.primary} />
    </TouchableOpacity>
  );
};
