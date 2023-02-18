import React, { FC, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
//import { StackScreenProps } from '@react-navigation/stack';
import { styles, colors } from '../theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

//interface Props  extends StackScreenProps<any, any>{}
interface Props  extends DrawerScreenProps<any, any>{}

export const Page1: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon name="menu-outline" size={30} onPress={() => navigation.toggleDrawer()} style={{ paddingHorizontal: 16 }} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1 screen</Text>
      <Button title="Go to page 2" onPress={() => navigation.navigate('Page2')} />

      <Text style={{ marginVertical: 20, fontSize: 20 }}>Navigate with arguments</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
        style={[styles.bigBtn, { backgroundColor: 'blue' }]}
          onPress={() => navigation.navigate('PagePerson', {
            id: 1,
            name: 'Pedro',
          })}
        >
          <Icon name="body-outline" color="#fff" size={30} />
          <Text style={[styles.bigBtnText, { marginTop: 4 }]}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.bigBtn, { backgroundColor: 'orange' }]}
          onPress={() => navigation.navigate('PagePerson', {
            id: 2,
            name: 'Rubs',
          })}
        >
          <Icon name="walk-outline" color="#fff" size={30} />
          <Text style={[styles.bigBtnText, { marginTop: 4 }]}>Rubs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
