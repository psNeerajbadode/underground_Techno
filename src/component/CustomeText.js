import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {theme} from '../utils/Constants';

const CustomeText = ({
  TextValue,
  textcolor,
  textAlign,
  fontWeight,
  fontSize,
  marginVertical,
  marginHorizontal,
  lineHeight,
  textTransform,
}) => {
  return (
    <Text
      style={{
        marginVertical: marginVertical,
        marginHorizontal: marginHorizontal,
        color: textcolor || theme.colors.textcolor,
        fontSize: fontSize || 18,
        textAlign: textAlign || 'left',
        fontWeight: fontWeight || '800',
        lineHeight: lineHeight,
        textTransform: textTransform || 'capitalize',
      }}>
      {TextValue}
    </Text>
  );
};

export default CustomeText;

const styles = StyleSheet.create({});
