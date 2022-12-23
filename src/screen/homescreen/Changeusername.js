import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../utils/Constants';
import Statusbar from '../../component/Statusbar';
import Header2 from '../../component/Header2';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import CustomeInput from '../../component/CustomeInput';
import Button from '../../component/Button';

const Changeusername = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Johan smith');
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2 onPress={() => navigation.goBack()} title={'Change username'} />
      <CustomeInput
        label={'Username'}
        placeholder={'Johan smith'}
        value={name}
        onChangeText={setName}
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

export default Changeusername;

const styles = StyleSheet.create({});
