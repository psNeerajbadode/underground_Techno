import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../utils/Constants';
import Statusbar from '../../component/Statusbar';
import TextFormatted from '../../component/TextFormatted';
import Button from '../../component/Button';
import Swiper from 'react-native-swiper';
const Approvel = () => {
  const dimension = useWindowDimensions();
  const navigation = useNavigation();
  const [line, setLine] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        translucent={true}
        hidden={false}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />

      {/* <ImageBackground
        imageStyle={{borderRadius: 20}}
        resizeMode="cover"
        style={{
          width: dimension.width - 10,
          height: dimension.width * 0.85,
          marginBottom: 15,
          alignSelf: 'center',
        }}
        source={require('../../assets/Images/Approvel.png')}></ImageBackground> */}

      <ScrollView>
        <Swiper
          dotColor="#fff"
          activeDotColor="#fff"
          activeDotStyle={{width: 30, height: 8}}
          style={{
            height: dimension.width * 0.85,
            marginBottom: 15,
          }}
          showsButtons={false}>
          <View
            style={{
              width: dimension.width - 20,
              height: dimension.width * 0.85,
              alignSelf: 'center',
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <Image
              resizeMode="cover"
              style={{
                width: dimension.width - 20,
                height: dimension.width * 0.85,
                alignSelf: 'center',
              }}
              source={require('../../assets/Images/Approvel.png')}
            />
          </View>
          <View
            style={{
              width: dimension.width - 20,
              height: dimension.width * 0.85,
              alignSelf: 'center',
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <Image
              resizeMode="cover"
              style={{
                width: dimension.width - 20,
                height: dimension.width * 0.85,
                alignSelf: 'center',
              }}
              source={require('../../assets/Images/BgImg1.png')}
            />
          </View>
          <View
            style={{
              width: dimension.width - 20,
              height: dimension.width * 0.85,
              alignSelf: 'center',
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <Image
              resizeMode="cover"
              style={{
                width: dimension.width - 20,
                height: dimension.width * 0.85,
                alignSelf: 'center',
              }}
              source={require('../../assets/Images/party2.png')}
            />
          </View>
        </Swiper>
        <PriceSect title={'Charity For Poor’s Dreams'} />
        <TextFormatted
          style={{marginHorizontal: 20, color: '#868889', fontSize: 12}}>
          Location of event
        </TextFormatted>
        <PriceSect
          color={'#868889'}
          title={'109 C parshwranath street, London'}
        />

        <PriceSect title={'About Event'} marginTop={10} />
        <TextFormatted
          numberOfLines={line == true ? undefined : 4}
          style={{
            color: theme.colors.primaryBlack,
            fontSize: 15,
            fontWeight: '500',
            textAlign: 'justify',
            marginHorizontal: 20,
            marginVertical: 5,
            lineHeight: 18,
          }}>
          Lorem ipsum dolor sit amet consectetur. Viverra dignissim ac tincidunt
          non sed. Sit ultricies in urna porta imperdiet volutpat nibh nam id.
          Id neque sit diam pellentesque sed id integer.
        </TextFormatted>
        <TextFormatted
          onPress={() => setLine(!line)}
          style={{
            color: theme.colors.maincolor,
            fontSize: 16,
            fontWeight: '700',
            textAlign: 'left',
            marginHorizontal: 20,
          }}>
          Read More
        </TextFormatted>

        <View style={{...styles.flex, marginHorizontal: 10}}>
          <Image
            resizeMode="cover"
            source={require('../../assets/Images/BgImg1.png')}
            style={styles.Imgbox}
          />
          <Image
            resizeMode="cover"
            source={require('../../assets/Images/party1.png')}
            style={styles.Imgbox}
          />
          <Image
            resizeMode="cover"
            source={require('../../assets/Images/party2.png')}
            style={styles.Imgbox}
          />
        </View>
        <TextFormatted
          style={{
            color: theme.colors.maincolor,
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'left',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          ID
        </TextFormatted>
        <TextFormatted
          style={{
            color: theme.colors.primaryBlack,
            fontSize: 15,
            fontWeight: '500',
            textAlign: 'left',
            marginHorizontal: 20,
          }}>
          #156248965
        </TextFormatted>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <TextFormatted
            style={{
              color: theme.colors.maincolor,
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'left',
            }}>
            Gender
          </TextFormatted>

          <Image
            resizeMode="cover"
            style={{width: 15, height: 15, marginLeft: 5}}
            source={require('../../assets/Icon/Gicon.png')}
          />
        </View>

        <View
          style={{
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 20,
          }}>
          <SocialBttn
            Dimension={dimension}
            title={'Facebook'}
            source={require('../../assets/Icon/Facebook.png')}
          />
          <SocialBttn
            Dimension={dimension}
            title={'Instagram'}
            source={require('../../assets/Icon/Instagram.png')}
          />

          <SocialBttn
            Dimension={dimension}
            title={'Tick-tok'}
            source={require('../../assets/Icon/Tiktok.png')}
          />
        </View>
        <Button
          onPress={() => navigation.goBack()}
          buttonName={'go backs'}
          width={'90%'}
          marginVertical={10}
        />
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Button
          fontSize={17}
          height={55}
          width={'50%'}
          fontWeight={'600'}
          buttonName={'Reject'}
          backgroundColor={'#FF0000'}
          borderRadius={-1}
        />
        <Button
          fontSize={17}
          height={55}
          width={'50%'}
          fontWeight={'600'}
          buttonName={'Accept'}
          backgroundColor={'#00C908'}
          borderRadius={-1}
        />
      </View>
    </View>
  );
};

const PriceSect = ({title, price, color, marginTop}) => (
  <View style={{...styles.flex, marginHorizontal: 20, marginTop: marginTop}}>
    <TextFormatted
      style={{
        color: color || theme.colors.primaryBlack,
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
export default Approvel;

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
  Imgbox: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
  },
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
});
