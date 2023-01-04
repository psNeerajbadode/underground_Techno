import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {theme} from '../../utils/Constants';
import Statusbar from '../../component/Statusbar';
import CustomeInput from '../../component/CustomeInput';
import {useState} from 'react';
import Button from '../../component/Button';
import Modal from 'react-native-modal';
import TextFormatted from '../../component/TextFormatted';
import {useNavigation} from '@react-navigation/native';

const Homescreen = () => {
  const Dimension = useWindowDimensions();
  const navigation = useNavigation();
  const [popup, setPopup] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />

      <View
        style={{
          marginTop: 55,
          marginBottom: 30,
          marginHorizontal: 25,
          ...styles.FlexStyle,
        }}>
        <View style={{width: 30, height: 24}} />
        <Image
          source={require('../../assets/Icon/logo.png')}
          resizeMode="contain"
          style={{
            width: Dimension.width / 2,
            height: (Dimension.width / 2) * 0.8,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={{alignSelf: 'flex-start'}}
          onPress={() => navigation.navigate('DMscreen')}>
          <Image
            source={require('../../assets/Icon/Dm.png')}
            resizeMode="contain"
            style={{width: 30, height: 24}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{alignSelf: 'center', width: '100%'}}
        onPress={() => navigation.navigate('SearchScreen')}>
        <CustomeInput
          editable={false}
          placeholder={'Put in your location'}
          paddingLeft={45}
          borderRadius={14}
          Icon={
            <Image
              source={require('../../assets/Icon/Search.png')}
              resizeMode="contain"
              style={{
                width: 17,
                height: 17,
                position: 'absolute',
                top: '35%',
                left: '5%',
                zIndex: 1,
              }}
            />
          }
        />
      </TouchableOpacity>

      <Button
        buttonName={'search'}
        marginVertical={25}
        onPress={() => navigation.navigate('Past', {title: 'Party'})}
      />
      <Modal isVisible={popup}>
        <View
          style={{
            width: Dimension.width - 60,
            height: Dimension.width * 1,
            backgroundColor: theme.colors.primary,
            alignSelf: 'center',
            padding: 15,
            borderRadius: 20,
          }}>
          <View style={{...styles.FlexStyle, marginBottom: 20}}>
            <View style={{width: 30, height: 24}} />
            <Image
              source={require('../../assets/Icon/Iconlogo.png')}
              resizeMode="contain"
              style={{
                width: Dimension.width / 3,
                height: (Dimension.width / 2) * 0.5,
                alignSelf: 'center',
              }}
            />
            <TouchableOpacity
              onPress={() => setPopup(false)}
              style={{alignSelf: 'flex-start'}}>
              <Image
                source={require('../../assets/Icon/Close.png')}
                resizeMode="contain"
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          </View>
          <TextFormatted
            style={{
              marginBottom: 5,
              color: '#464646',
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Welcome to
          </TextFormatted>
          <TextFormatted
            style={{
              marginBottom: 5,
              color: theme.colors.maincolor,
              fontSize: 15,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            UNDRGROUND… THE PARTY SCENE.
          </TextFormatted>
          <TextFormatted
            style={{
              color: '#464646',
              fontSize: 15,
              fontWeight: '600',
              textAlign: 'center',
              lineHeight: 28,
            }}>
            Where you can find private deluxe parties near you. Free, exclusive,
            no data and no ads.
          </TextFormatted>

          <TextFormatted
            style={{
              marginTop: 25,
              color: theme.colors.primaryBlack,
              fontSize: 16,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Party on dudes
          </TextFormatted>
        </View>
      </Modal>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  FlexStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
