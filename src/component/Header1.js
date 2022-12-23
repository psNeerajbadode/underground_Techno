import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import Statusbar from './Statusbar';
import {theme} from '../utils/Constants';

const Header1 = () => {
  const Dimension = useWindowDimensions();
  return (
    <View style={{marginTop: 50, marginBottom: 30}}>
      <Statusbar
        hidden={false}
        barStyle={'dark-content'}
        backgroundColor={theme.colors.primary}
      />
      <Image
        source={require('../assets/Icon/logo.png')}
        resizeMode="contain"
        style={{
          width: Dimension.width / 2,
          height: (Dimension.width / 2) * 0.8,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

export default Header1;

const styles = StyleSheet.create({});
