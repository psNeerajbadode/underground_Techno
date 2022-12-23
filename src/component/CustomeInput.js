import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {theme} from '../utils/Constants';
import TextFormatted from './TextFormatted';

const CustomeInput = ({
  label,
  onChangeText,
  value,
  multiline,
  maxLength,
  keyboardType,
  Icon,
  placeholderTextColor,
  placeholder,
  paddingLeft,
  borderRadius,
  secureTextEntry,
  heightIn,
  textAlignVertical,
  Incolor,
  infontWeight,
  inborderColor,
  vmarginHorizontal,
  vmarginVertical,
  InlineHeight,
  editable,
  flex,
  InbackgroundColor,
}) => {
  return (
    <View
      style={{
        flex: flex,
        marginHorizontal: vmarginHorizontal || 20,
        marginVertical: vmarginVertical || 20,
      }}>
      <TextFormatted
        style={{
          textAlign: 'left',
          fontSize: 12,
          fontWeight: '500',
          marginVertical: 15,
          color: theme.colors.primaryBlack,
          position: 'absolute',
          top: -23,
          left: 12,
          zIndex: 1,
          backgroundColor: theme.colors.primary,
        }}>
        {label}
      </TextFormatted>
      {Icon}
      <TextInput
        editable={editable}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || '#00000050'}
        maxLength={maxLength}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
        style={{
          borderColor: inborderColor || '#E9BCFF40',
          borderWidth: 1,
          /* opacity: 0.16, */
          borderRadius: borderRadius || 8,
          height: heightIn || 50,
          zIndex: 0,
          backgroundColor: InbackgroundColor || theme.colors.primary,
          paddingLeft: paddingLeft || 20,
          fontSize: 14,
          fontWeight: infontWeight || '400',
          color: Incolor || '#000000',
          zIndex: 0,
          lineHeight: InlineHeight,
        }}
      />
    </View>
  );
};

export default CustomeInput;

const styles = StyleSheet.create({});
