import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import Statusbar from '../../component/Statusbar';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../utils/Constants';
import TextFormatted from '../../component/TextFormatted';
import {useDispatch} from 'react-redux';
import {User} from '../../redux/actions/Actions';
import {USER} from '../../redux/actions/ActionType';

const Logintype = () => {
  const Dimension = useWindowDimensions();
  const navigation = useNavigation();
  const Dispatch = useDispatch();
  return (
    <ImageBackground
      source={require('../../assets/Images/splashImg.png')}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Statusbar hidden={true} />
      <Image
        source={require('../../assets/Icon/logo.png')}
        resizeMode="contain"
        style={{
          width: Dimension.width,
          height: Dimension.width * 0.5,
          alignSelf: 'center',
          marginTop: '-50%',
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 20,
          width: '85%',
          alignSelf: 'center',
        }}>
        <Bttn
          onPress={() => {
            Dispatch({type: USER, payload: {UserRole: 'Partier'}});
            navigation.navigate('Login');
          }}
          source={require('../../assets/Icon/user.png')}
          title={'Partier'}
        />
        <Bttn
          onPress={() => {
            navigation.navigate('Login');
            Dispatch({type: USER, payload: {UserRole: 'Vendor'}});
          }}
          source={require('../../assets/Icon/vendor.png')}
          title={'Vendor'}
        />
      </View>
    </ImageBackground>
  );
};

const Bttn = ({title, onPress, source}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: theme.colors.primary,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 20,
    }}>
    <Image
      source={source}
      resizeMode="contain"
      style={{
        width: 25,
        height: 25,
      }}
    />
    <TextFormatted
      style={{
        fontSize: 14,
        color: theme.colors.maincolor,
        marginLeft: 15,
        fontWeight: '600',
        marginTop: 5,
      }}>
      {title}
    </TextFormatted>
  </TouchableOpacity>
);

export default Logintype;

const styles = StyleSheet.create({});
