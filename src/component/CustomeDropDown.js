import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {theme} from '../utils/Constants';
import TextFormatted from './TextFormatted';

const CustomeDropDown = ({
  label,
  paddingLeft,
  borderRadius,
  heightIn,
  Incolor,
  infontWeight,
  inborderColor,
  vmarginHorizontal,
  vmarginVertical,
  InlineHeight,
  DropData,
  DropDown,
  renderItem,
  MainPress,
  styleF,
  Value,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={MainPress}
        style={{
          marginHorizontal: vmarginHorizontal || 20,
          marginVertical: vmarginVertical || 20,
          borderColor: inborderColor || '#E9BCFF40',
          borderWidth: 1,
          borderRadius: borderRadius || 8,
          height: heightIn || 50,
          zIndex: 0,
          backgroundColor: theme.colors.primary,
          paddingLeft: paddingLeft,
          fontSize: 14,
          fontWeight: infontWeight || '400',
          color: Incolor || '#000000',
          zIndex: 0,
          lineHeight: InlineHeight,
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

        <TextFormatted
          style={{
            paddingHorizontal: 20,
            fontSize: 14,
            fontWeight: '400',
            color: theme.colors.primaryBlack,
            paddingTop: 13,
            textTransform: 'capitalize',
          }}>
          {Value}
        </TextFormatted>

        <Image
          resizeMode="contain"
          source={require('../assets/Icon/DownIcon.png')}
          style={{
            width: 12,
            height: 12,
            position: 'absolute',
            zIndex: 1,
            right: 15,
            top: '35%',
          }}
        />
      </TouchableOpacity>

      {DropDown == false && (
        <FlatList
          style={
            styleF || {
              marginHorizontal: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 10,
              backgroundColor: '#fff',
              marginTop: -10,
              padding: 10,
            }
          }
          data={DropData}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default CustomeDropDown;

const styles = StyleSheet.create({});
