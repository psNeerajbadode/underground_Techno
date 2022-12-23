import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Statusbar from './Statusbar';
import {theme} from '../utils/Constants';
import TextFormatted from './TextFormatted';
import {useNavigation} from '@react-navigation/native';

const Header2 = ({
  title,
  onPress,
  source,
  opacityR,
  sourceRight,
  onPressR,
  sizeR,
  RightT,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 60, marginBottom: 30}}>
      <Statusbar
        hidden={false}
        barStyle={'dark-content'}
        backgroundColor={theme.colors.primary}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity onPress={onPress} style={{alignSelf: 'center'}}>
          <Image
            resizeMode="contain"
            style={{width: 45, height: 45}}
            source={source || require('../assets/Icon/Backarrow.png')}
          />
        </TouchableOpacity>
        <TextFormatted
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: theme.colors.primaryBlack,
            textTransform: 'capitalize',
          }}>
          {title}
        </TextFormatted>
        {RightT || (
          <TouchableOpacity
            onPress={onPressR}
            style={{alignSelf: 'center', opacity: opacityR || 0}}>
            <Image
              resizeMode="contain"
              style={{width: sizeR || 45, height: sizeR || 45}}
              source={sourceRight || require('../assets/Icon/Backarrow.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({});
