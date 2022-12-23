import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {theme} from '../../utils/Constants';
import Header1 from '../../component/Header1';
import TextFormatted from '../../component/TextFormatted';
import CustomeInput from '../../component/CustomeInput';
import {useState} from 'react';
import Button from '../../component/Button';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const Login = () => {
  const Dimension = useWindowDimensions();
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [passcode, setPasscode] = useState();
  const [check, setCheck] = useState(false);
  const User = useSelector(state => state.User);
  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Header1 />

      <View
        style={{
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 20,
        }}>
        <SocialBttn
          Dimension={Dimension}
          title={'Facebook'}
          source={require('../../assets/Icon/Facebook.png')}
        />
        <SocialBttn
          Dimension={Dimension}
          title={'Instagram'}
          source={require('../../assets/Icon/Instagram.png')}
        />

        <SocialBttn
          Dimension={Dimension}
          title={'Tick-tok'}
          source={require('../../assets/Icon/Tiktok.png')}
        />
      </View>

      <TextFormatted
        style={{
          textAlign: 'center',
          fontSize: 12,
          fontWeight: '400',
          marginVertical: 20,
          color: theme.colors.primaryBlack,
        }}>
        Or Continue With
      </TextFormatted>

      <CustomeInput label={'Username'} value={name} onChangeText={setName} />
      <CustomeInput
        label={'Passcode'}
        value={passcode}
        onChangeText={setPasscode}
      />

      <TextFormatted
        onPress={() => navigation.navigate('Forgot')}
        style={{
          alignSelf: 'flex-start',
          fontSize: 10,
          fontWeight: '500',
          marginBottom: 10,
          marginHorizontal: 25,
          color: theme.colors.primaryBlack,
        }}>
        Forgot passcode
      </TextFormatted>
      <View
        style={{
          alignSelf: 'flex-start',
          marginHorizontal: 25,
          marginVertical: 10,
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
      <Button
        buttonName={'Login'}
        marginVertical={30}
        onPress={() => navigation.replace('Homenavigation')}
      />
      <TextFormatted
        style={{
          ...styles.text2,
          color: theme.colors.primaryBlack,
        }}>
        New user?
      </TextFormatted>

      <TextFormatted
        onPress={() => navigation.navigate('Createaccount')}
        style={{
          ...styles.text2,
          color: theme.colors.maincolor,
          textDecorationLine: 'underline',
          marginVertical: 10,
        }}>
        Create account
      </TextFormatted>
    </ScrollView>
  );
};

const SocialBttn = ({onPress, title, source, Dimension}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      ...styles.socialB,
      width: Dimension.width / 3.5 - 10,
    }}>
    <Image
      source={source}
      resizeMode="contain"
      style={{
        width: 24,
        height: 24,
        alignSelf: 'center',
      }}
    />
    <TextFormatted style={styles.Text1}>{title}</TextFormatted>
  </TouchableOpacity>
);
export default Login;

const styles = StyleSheet.create({
  socialB: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 15,
    height: 65,
    padding: 10,
    backgroundColor: '#fff',
  },
  Text1: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    marginVertical: 5,
    color: theme.colors.primaryBlack,
  },
  text2: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    marginHorizontal: 25,
  },
});
