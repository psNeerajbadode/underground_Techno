import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Switch} from 'react-native-paper';
import TextFormatted from '../../component/TextFormatted';
import {theme} from '../../utils/Constants';
import Header2 from '../../component/Header2';
import Statusbar from '../../component/Statusbar';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Sound = () => {
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2 onPress={() => navigation.goBack()} title={'Sound'} />
      <TextFormatted
        style={{
          color: theme.colors.primaryBlack,
          fontSize: 15,
          fontWeight: '600',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        Sound
      </TextFormatted>

      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <TextFormatted
          style={{
            color: theme.colors.darkGrey,
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 20,
            flex: 3,
          }}>
          Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam
          nonumym
        </TextFormatted>
        <Switch style={{flex: 1}} value={toggle} onValueChange={setToggle} />
      </View>
    </View>
  );
};

export default Sound;

const styles = StyleSheet.create({});
