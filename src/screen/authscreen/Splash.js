import {
  Image,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Statusbar from '../../component/Statusbar';

const Splash = () => {
  const Dimension = useWindowDimensions();
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Logintype');
    }, 3000);
  }, []);

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
        }}
      />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({});
