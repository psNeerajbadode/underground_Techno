import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import Statusbar from '../../component/Statusbar';
import {theme} from '../../utils/Constants';
import TextFormatted from '../../component/TextFormatted';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <View style={{marginVertical: 40}} />

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
        onPress={() => navigation.navigate('Rateapp')}
        source={require('../../assets/Icon/Rate.png')}
        title={'Rate app'}
      />
      {/* <Menuitem
        source={require('../../assets/Icon/Write.png')}
        title={'Write review'}
      /> */}
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
      <Menuitem
        onPress={() => navigation.navigate('Termscondition')}
        source={require('../../assets/Icon/T&C.png')}
        title={'Check terms and condition'}
      />
      <Menuitem
        onPress={() => navigation.navigate('ContactUs')}
        source={require('../../assets/Icon/Contactus.png')}
        title={'Contact Us'}
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
export default Setting;

const styles = StyleSheet.create({});
