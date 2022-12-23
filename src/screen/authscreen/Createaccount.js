import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header1 from '../../component/Header1';
import {theme} from '../../utils/Constants';
import CustomeInput from '../../component/CustomeInput';
import {useState} from 'react';
import Button from '../../component/Button';
import TextFormatted from '../../component/TextFormatted';
import {useNavigation} from '@react-navigation/native';

const Createaccount = () => {
  const [name, setName] = useState();
  const [passcode, setPasscode] = useState();
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Header1 />

      <CustomeInput label={'Username'} value={name} onChangeText={setName} />

      <CustomeInput label={'Email'} value={email} onChangeText={setEmail} />

      <CustomeInput
        label={'Passcode'}
        value={passcode}
        onChangeText={setPasscode}
      />

      <CustomeInput
        label={'Mobile No.'}
        value={number}
        onChangeText={setNumber}
        maxLength={10}
        keyboardType={'number-pad'}
      />

      <View
        style={{
          alignSelf: 'flex-start',
          marginHorizontal: 25,
          marginVertical: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setCheck(!check)}>
          <Image
            resizeMode="contain"
            style={{width: 20, height: 20}}
            source={
              check
                ? require('../../assets/Icon/check.png')
                : require('../../assets/Icon/unheck.png')
            }
          />
        </TouchableOpacity>

        <TextFormatted
          style={{
            fontSize: 10,
            marginLeft: 10,
            color: theme.colors.primaryBlack,
            fontWeight: '500',
          }}>
          Remember me
        </TextFormatted>
      </View>
      <Button buttonName={'confirm'} marginVertical={20} />
      <TextFormatted
        style={{
          color: theme.colors.maincolor,
          fontWeight: '500',
          marginVertical: 10,
          textAlign: 'center',
        }}>
        Already have an Account ? {''}
        <TextFormatted
          style={{
            textDecorationLine: 'underline',
            fontWeight: '600',
            paddingLeft: 5,
          }}
          onPress={() => navigation.navigate('Login')}>
          Sing In
        </TextFormatted>
      </TextFormatted>
    </ScrollView>
  );
};

export default Createaccount;

const styles = StyleSheet.create({});
