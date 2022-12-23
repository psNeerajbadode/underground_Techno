import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {theme} from '../../utils/Constants';
import Statusbar from '../../component/Statusbar';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../component/TextFormatted';
import {Title} from 'react-native-paper';
import Button from '../../component/Button';

const Details = () => {
  const dimension = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        translucent={true}
        hidden={false}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ImageBackground
        resizeMode="cover"
        style={{
          width: dimension.width,
          height: dimension.width * 0.7,
          marginBottom: 15,
        }}
        source={require('../../assets/Images/BgImg1.png')}>
        <View style={{...styles.flexClass}}>
          <Image
            resizeMode="cover"
            source={require('../../assets/Icon/star11.png')}
            style={{width: 24, height: 24}}
          />
          <TextFormatted
            style={{
              color: theme.colors.primary,
              fontSize: 15,
              fontWeight: '700',
            }}>
            Host
          </TextFormatted>
        </View>
      </ImageBackground>
      <ScrollView>
        <PriceSect title={'Door Price'} price={'250$'} />
        <PriceSect title={'Prepay Price'} price={'250$'} />
        <TextFormatted
          style={{
            color: theme.colors.darkGrey,
            fontSize: 12,
            fontWeight: '500',
            textAlign: 'justify',
            marginHorizontal: 20,
            marginVertical: 10,
            lineHeight: 18,
          }}>
          Lorem ipsum dolor sit amet consectetur. Viverra dignissim ac tincidunt
          non sed. Sit ultricies in urna porta imperdiet volutpat nibh nam id.
          Id neque sit diam pellentesque sed id integer. Laoreet interdum nibh
          egestas elementum lectus nulla pellentesque ut ut. Enim viverra
          ultricies interdum quis urna tellus amet risus. Aliquet velit faucibus
          sed donec dolor ante vel. Massa eget viverra aliquet fermentum
          interdum congue sed. Donec ultrices et sed non ut amet elementum
          mauris. Gravida purus at molestie pharetra nibh egestas. Lacinia mi
          est iaculis egestas magna vulputate nulla sit velit.
        </TextFormatted>
        <TextFormatted
          style={{
            color: theme.colors.maincolor,
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          Event Time- 08:00- 9:00 AM
        </TextFormatted>
        <TextFormatted
          style={{
            color: theme.colors.primaryBlack,
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'left',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          Address
        </TextFormatted>
        <TextFormatted
          style={{
            color: theme.colors.primaryBlack,
            fontSize: 15,
            fontWeight: '500',
            textAlign: 'left',
            marginHorizontal: 20,
          }}>
          Katherynborough
        </TextFormatted>
        <Button
          buttonName={'prepay to get on list'}
          width={'90%'}
          marginVertical={10}
        />

        <View
          style={{
            ...styles.flex,
            marginHorizontal: 20,
            // alignSelf: 'center',
            overflow: 'hidden',
          }}>
          <TextFormatted
            onPress={() => navigation.goBack()}
            style={{
              color: theme.colors.primaryBlack,
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'left',
            }}>
            Go Back
          </TextFormatted>
          <Button
            buttonName={'Share with contact'}
            width={'65%'}
            marginVertical={10}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const PriceSect = ({title, price}) => (
  <View style={{...styles.flex, marginHorizontal: 20, marginTop: 10}}>
    <TextFormatted
      style={{
        color: theme.colors.primaryBlack,
        fontSize: 15,
        fontWeight: '600',
      }}>
      {title}
    </TextFormatted>
    <TextFormatted
      style={{
        color: theme.colors.maincolor,
        fontSize: 18,
        fontWeight: '600',
      }}>
      {price}
    </TextFormatted>
  </View>
);
export default Details;

const styles = StyleSheet.create({
  flexClass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '20%',
    width: '90%',
    alignSelf: 'center',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
