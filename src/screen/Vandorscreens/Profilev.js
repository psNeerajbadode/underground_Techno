import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import Statusbar from '../../component/Statusbar';
import {theme} from '../../utils/Constants';
import TextFormatted from '../../component/TextFormatted';
import Header2 from '../../component/Header2';

const Profilev = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2
        opacityR={1}
        sizeR={28}
        title={'Vendor Profile'}
        onPressR={() => navigation.navigate('EditProfile')}
        sourceRight={require('../../assets/Icon/edit1.png')}
      />
      <Image
        resizeMode="contain"
        style={{
          width: 96,
          height: 96,
          borderRadius: 50,
          marginBottom: 10,
          alignSelf: 'center',
        }}
        source={require('../../assets/Images/User12.png')}
      />
      <TextTop
        titleTop={'Olivia Austin'}
        titleBottom={'oliviaaustin@gmail.com'}
      />

      <Menuitem
        onPress={() => navigation.navigate('Allownotifications')}
        source={require('../../assets/Icon/Notifications.png')}
        title={'Allow notifications'}
      />
      <Menuitem
        onPress={() => navigation.navigate('Sound')}
        source={require('../../assets/Icon/Sound.png')}
        title={'Sound'}
      />

      <Menuitem
        onPress={() => navigation.navigate('Changeusername')}
        source={require('../../assets/Icon/Change.png')}
        title={'Change username'}
      />
      <Menuitem
        onPress={() => navigation.navigate('Changepasscode')}
        source={require('../../assets/Icon/Change.png')}
        title={'Change passcode'}
      />
    </View>
  );
};

const Menuitem = ({source, title, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '87%',
      marginBottom: 30,
    }}>
    <Image
      resizeMode="contain"
      style={{width: 23, height: 23}}
      source={source}
    />
    <TextFormatted
      style={{
        fontSize: 14,
        fontWeight: '400',
        color: theme.colors.primaryBlack,
        flex: 1,
        marginLeft: 25,
      }}>
      {title}
    </TextFormatted>

    <Image
      resizeMode="contain"
      style={{width: 15, height: 10}}
      source={require('../../assets/Icon/arrowR.png')}
    />
  </TouchableOpacity>
);

const TextTop = ({titleBottom, titleTop}) => (
  <View style={{marginBottom: 20}}>
    <TextFormatted
      style={{
        color: theme.colors.primaryBlack,
        fontWeight: '600',
        fontSize: 15,
        textAlign: 'center',
      }}>
      {titleTop}
    </TextFormatted>
    <TextFormatted
      style={{
        color: theme.colors.darkGrey,
        fontWeight: '600',
        fontSize: 15,
        textAlign: 'center',
      }}>
      {titleBottom}
    </TextFormatted>
  </View>
);
export default Profilev;

const styles = StyleSheet.create({});
