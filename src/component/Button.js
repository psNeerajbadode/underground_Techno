import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TextFormatted from './TextFormatted';
import {theme} from '../utils/Constants';

const Button = ({
  buttonName,
  onPress,
  flexDirection,
  color,
  Icon,
  disabled,
  width,
  height,
  opacity,
  fontSize,
  Loading,
  marginHorizontal,
  marginVertical,
  backgroundColor,
  fontWeight,
  paddingVertical,
  borderColor,
  borderWidth,
  borderRadius,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        opacity: opacity,
        paddingVertical: paddingVertical || 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius || 5,
        flexDirection: flexDirection,
        width: width || '87%',
        height: height || 50,
        alignSelf: 'center',
        backgroundColor: backgroundColor || theme.colors.maincolor,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
        borderColor: borderColor,
        borderWidth: borderWidth,
      }}>
      {Loading ? (
        <ActivityIndicator size={'large'} color={theme.colors.primary} />
      ) : (
        <View>
          {Icon}
          <TextFormatted
            style={{
              fontSize: fontSize || 14,
              fontWeight: fontWeight || '500',
              color: color || theme.colors.primary,
              zIndex: 30,
              textTransform: 'uppercase',
            }}>
            {buttonName}
          </TextFormatted>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
