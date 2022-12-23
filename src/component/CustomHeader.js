import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppBar} from '@react-native-material/core';
import Statusbar from './Statusbar';
import {theme} from '../utils/Constants';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({onPress, title, source, trailing}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Statusbar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <View style={{height: 35, backgroundColor: theme.colors.maincolor}} />
      <AppBar
        contentContainerStyle={{
          backgroundColor: theme.colors.maincolor,
          paddingHorizontal: 25,
          justifyContent: 'center',
          shadowColor: '#00000010',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 10,
        }}
        titleStyle={{
          fontSize: 20,
          textAlign: 'left',
        }}
        title={title}
        leading={props => (
          <TouchableOpacity onPress={onPress}>
            <Image
              source={source || require('../assets/Icon/backarrow.png')}
              resizeMode="cover"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        )}
        trailing={trailing}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
