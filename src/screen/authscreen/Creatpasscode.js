import {StyleSheet, View} from 'react-native';
import React from 'react';
import Button from '../../component/Button';
import CustomeInput from '../../component/CustomeInput';
import TextFormatted from '../../component/TextFormatted';
import {theme} from '../../utils/Constants';
import Header2 from '../../component/Header2';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const Creatpasscode = () => {
  const navigation = useNavigation();
  const [newpass, setNewpass] = useState();
  const [confirmpass, setConfirmpass] = useState();
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
        Creat new passcode
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
        Your new passcode must be unique from those previously used.
      </TextFormatted>

      <CustomeInput
        label={'New Passcode'}
        value={newpass}
        onChangeText={setNewpass}
      />
      <CustomeInput
        label={'Confirmed Passcode'}
        value={confirmpass}
        onChangeText={setConfirmpass}
      />

      <Button
        buttonName={'reset Passcode'}
        marginVertical={20}
        // onPress={() => navigation.navigate('Otpvarify')}
      />
    </View>
  );
};

export default Creatpasscode;

const styles = StyleSheet.create({});
