import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../utils/Constants';
import Header2 from '../../component/Header2';
import CustomeInput from '../../component/CustomeInput';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Statusbar from '../../component/Statusbar';
import Button from '../../component/Button';

const Changepasscode = () => {
  const navigation = useNavigation();
  const [current, setCurrent] = useState();
  const [newpass, setNewpass] = useState();
  const [confirm, setConfirm] = useState();
  const [hide, setHide] = useState(true);

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2 onPress={() => navigation.goBack()} title={'Change passcode'} />
      <CustomeInput
        label={'Current Passcode'}
        value={current}
        onChangeText={setCurrent}
        paddingLeft={20}
      />
      <CustomeInput
        label={'New Passcode'}
        value={newpass}
        onChangeText={setNewpass}
        paddingLeft={20}
        secureTextEntry={hide ? false : true}
        Icon={
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: '35%',
              right: '5%',
              zIndex: 1,
            }}
            onPress={() => setHide(!hide)}>
            <Image
              source={require('../../assets/Icon/Hide.png')}
              resizeMode="contain"
              style={{
                width: 17,
                height: 17,
                position: 'absolute',
                top: '35%',
                right: '5%',
                zIndex: 1,
              }}
            />
          </TouchableOpacity>
        }
      />
      <CustomeInput
        label={'Confirm Passcode'}
        value={confirm}
        onChangeText={setConfirm}
        paddingLeft={20}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          width: '100%',
          alignSelf: 'center',
        }}>
        <Button buttonName={'save'} />
      </View>
    </View>
  );
};

export default Changepasscode;

const styles = StyleSheet.create({});
