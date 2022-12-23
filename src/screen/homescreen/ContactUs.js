import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {theme} from '../../utils/Constants';
import Statusbar from '../../component/Statusbar';
import Header2 from '../../component/Header2';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import CustomeInput from '../../component/CustomeInput';
import Button from '../../component/Button';

const ContactUs = () => {
  const navigation = useNavigation();
  const dimension = useWindowDimensions();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2 onPress={() => navigation.goBack()} title={'Contact Us'} />
      <ScrollView>
        <Image
          resizeMode="cover"
          source={require('../../assets/Images/ContactUs1.png')}
          style={{
            width: dimension.width - 40,
            height: dimension.width * 0.4,
            alignSelf: 'center',
            marginBottom: 20,
          }}
        />

        <CustomeInput
          label={'Name'}
          value={name}
          onChangeText={setName}
          paddingLeft={20}
        />
        <CustomeInput
          label={'Email'}
          value={email}
          onChangeText={setEmail}
          paddingLeft={20}
        />
        <CustomeInput
          textAlignVertical={'top'}
          heightIn={120}
          label={'Message'}
          value={msg}
          onChangeText={setMsg}
          paddingLeft={20}
        />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          width: '100%',
          alignSelf: 'center',
        }}>
        <Button
          buttonName={'Submit'}
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
