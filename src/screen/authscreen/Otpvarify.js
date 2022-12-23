import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextFormatted from '../../component/TextFormatted';
import {theme} from '../../utils/Constants';
import Header2 from '../../component/Header2';
import {useNavigation} from '@react-navigation/native';
import Button from '../../component/Button';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useState} from 'react';

const Otpvarify = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Header2 onPress={() => navigation.goBack()} />
      <TextFormatted
        style={{
          color: theme.colors.textcolor,
          fontSize: 20,
          fontWeight: '700',
          marginHorizontal: 22,
        }}>
        OTP Verification
      </TextFormatted>
      <TextFormatted
        style={{
          color: theme.colors.darkGrey,
          fontSize: 14,
          fontWeight: '500',
          marginHorizontal: 22,
          lineHeight: 22,
          marginVertical: 15,
        }}>
        Enter the verification code we just sent on your email address.
      </TextFormatted>

      <CodeField
        value={otp}
        onChangeText={setOtp}
        cellCount={4}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Button
        buttonName={'verify'}
        marginVertical={20}
        onPress={() => navigation.navigate('Creatpasscode')}
      />
    </View>
  );
};

export default Otpvarify;

const styles = StyleSheet.create({
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginVertical: 15, marginHorizontal: 40},
  cell: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 50,
    height: 50,
    color: '#000',
  },
  focusCell: {
    borderColor: '#000',
  },
});
