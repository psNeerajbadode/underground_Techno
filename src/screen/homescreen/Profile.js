import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Statusbar from '../../component/Statusbar';
import {theme} from '../../utils/Constants';
import Header2 from '../../component/Header2';
import TextFormatted from '../../component/TextFormatted';
import Reviews from './Components/Reviews';
import PastParty from './Components/PastParty';
import Event from './Components/Event';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const [readmore, setReadmore] = useState(false);
  const [ActiveTab, setActiveTab] = useState('Reviews');
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />

      <Header2
        opacityR={1}
        sizeR={28}
        onPressR={() => navigation.navigate('EditProfile')}
        sourceRight={require('../../assets/Icon/edit1.png')}
      />
      <View style={{marginTop: -75, alignItems: 'center'}}>
        <Image
          resizeMode="contain"
          style={{width: 96, height: 96, borderRadius: 50, marginBottom: 10}}
          source={require('../../assets/Images/User12.png')}
        />
        <TextTop titleTop={'David Silbia859'} titleBottom={'Johan Smiths'} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <TextTop titleTop={'350'} titleBottom={'Following'} />
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: '#DDDDDD',
              width: 2,
              height: 30,
            }}
          />
          <TextTop titleTop={'346'} titleBottom={'Followers'} />
        </View>
        <View
          style={{
            ...styles.flexClass,
            marginVertical: 0,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Following')}
            style={{
              ...styles.flexClass,
              ...styles.flow,
              backgroundColor: theme.colors.maincolor,
              borderColor: theme.colors.maincolor,
              borderWidth: 2,
            }}>
            <Image
              resizeMode="contain"
              style={{width: 19, height: 19, marginLeft: 35}}
              source={require('../../assets/Icon/userplus1.png')}
            />
            <TextFormatted
              style={{
                fontSize: 16,
                color: theme.colors.primary,
                fontWeight: '500',
                paddingRight: 25,
              }}>
              Friends
            </TextFormatted>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.flexClass,
              ...styles.flow,
              borderColor: theme.colors.maincolor,
              borderWidth: 2,
            }}>
            <Image
              resizeMode="cover"
              style={{
                width: 16,
                height: 16,
                marginLeft: 25,
                tintColor: theme.colors.maincolor,
              }}
              source={require('../../assets/Icon/Chat1.png')}
            />
            <TextFormatted
              style={{
                fontSize: 16,
                color: theme.colors.maincolor,
                fontWeight: '500',
                paddingRight: 15,
              }}>
              Massages
            </TextFormatted>
          </TouchableOpacity>
        </View>
      </View>
      <TextFormatted
        style={{
          fontSize: 16,
          textAlign: 'left',
          marginTop: 10,
          fontWeight: '600',
          color: theme.colors.primaryBlack,
          marginHorizontal: 20,
        }}>
        Bio
      </TextFormatted>
      <TextFormatted
        numberOfLines={readmore ? undefined : 4}
        style={{
          fontSize: 14,
          textAlign: 'justify',
          fontWeight: '500',
          color: theme.colors.darkGrey,
          marginHorizontal: 20,
        }}>
        Lorem ipsum dolor sit amet consectetur. Viverra dignissim ac tincidunt
        non sed. Sit ultricies in urna porta imperdiet volutpat nibh nam id. Id
        neque sit diam pellentesque sed id integer.
      </TextFormatted>
      <TextFormatted
        onPress={() => setReadmore(!readmore)}
        style={{
          fontSize: 16,
          textAlign: 'left',
          fontWeight: '600',
          color: theme.colors.maincolor,
          marginHorizontal: 20,
        }}>
        Read More
      </TextFormatted>

      {/* tab section */}

      <View style={{...styles.flexClass, marginVertical: 10}}>
        <TextFormatted
          onPress={() => setActiveTab('Reviews')}
          style={{
            ...styles.tabtext,
            borderBottomColor: ActiveTab == 'Reviews' ? '#500077' : '#fff',
          }}>
          Reviews
        </TextFormatted>
        <TextFormatted
          onPress={() => setActiveTab('Past')}
          style={{
            ...styles.tabtext,
            borderBottomColor: ActiveTab == 'Past' ? '#500077' : '#fff',
          }}>
          Past Party
        </TextFormatted>
        <TextFormatted
          onPress={() => setActiveTab('Event')}
          style={{
            ...styles.tabtext,
            borderBottomColor: ActiveTab == 'Event' ? '#500077' : '#fff',
          }}>
          Event
        </TextFormatted>
      </View>

      {ActiveTab == 'Reviews' ? (
        <Reviews />
      ) : ActiveTab == 'Past' ? (
        <PastParty />
      ) : (
        <Event />
      )}
    </View>
  );
};

const TextTop = ({titleBottom, titleTop}) => (
  <View>
    <TextFormatted
      style={{
        color: theme.colors.primaryBlack,
        fontWeight: '600',
        fontSize: 15,
        textAlign: 'center',
      }}>
      {titleTop}
    </TextFormatted>
    <TextFormatted
      style={{
        color: theme.colors.darkGrey,
        fontWeight: '600',
        fontSize: 15,
        textAlign: 'center',
      }}>
      {titleBottom}
    </TextFormatted>
  </View>
);
export default Profile;

const styles = StyleSheet.create({
  flexClass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flow: {
    marginHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
    width: '42%',
  },
  tabtext: {
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: '500',
    color: theme.colors.primaryBlack,
    borderBottomWidth: 3,
    borderRadius: 2,
  },
});
