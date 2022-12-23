import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../utils/Constants';
import Header2 from '../../component/Header2';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../component/TextFormatted';
import {useState} from 'react';
import CustomeInput from '../../component/CustomeInput';
import Button from '../../component/Button';

const Forgot = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
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
        Forgot Passcode?
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
        Don't worry! It occurs. Please enter the email address linked with your
        account.
      </TextFormatted>

      <CustomeInput label={'Email'} value={email} onChangeText={setEmail} />

      <Button
        buttonName={'send'}
        marginVertical={20}
        onPress={() => navigation.navigate('Otpvarify')}
      />
    </View>
  );
};

export default Forgot;

const styles = StyleSheet.create({});
