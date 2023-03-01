import React, { FC, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/theme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

/*interface RouterParams {
  id: number
  name: string
}*/

interface Props extends StackScreenProps<RootStackParams, 'PagePerson'>{}

export const Person: FC<Props> = ({ navigation, route }) => {
  //const params = route.params as RouterParams;
  const { changeUser } = useContext(AuthContext);
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  useEffect(() => {
    if (params.name) {changeUser(params.name);}
  }, [params.name]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{ JSON.stringify(params, null, 2) }</Text>
    </View>
  );
};
