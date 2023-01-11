import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../utils/Constants';
import TextFormatted from '../../component/TextFormatted';
import Statusbar from '../../component/Statusbar';
import {PartyData} from '../../utils/ArrayData';

const Partyv = () => {
  const dimension = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <View style={{marginVertical: 30}} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          marginHorizontal: 20,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}
          style={{alignSelf: 'flex-end', marginRight: 10}}>
          <Image
            resizeMode="contain"
            style={{width: 37, height: 37}}
            source={require('../../assets/Icon/vNotification.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate('Calendarscreen')}>
          <Image
            resizeMode="contain"
            style={{width: 37, height: 37}}
            source={require('../../assets/Icon/vCalendor.png')}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={PartyData}
        renderItem={({item, i}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Approvel')}
            style={{
              ...styles.flexClass,
              marginBottom: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              backgroundColor: '#fff',
              borderRadius: 10,
              marginHorizontal: 20,
              marginVertical: 10,
              overflow: 'hidden',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DMscreen')}
              style={{
                flex: 1,
                alignSelf: 'flex-end',
                backgroundColor: theme.colors.maincolor,
                position: 'absolute',
                top: 10,
                right: 10,
                borderRadius: 5,
                padding: 5,
              }}>
              <TextFormatted
                style={{fontSize: 10, color: '#fff', fontWeight: '600'}}>
                Vendore
              </TextFormatted>
            </TouchableOpacity>
            <Image
              resizeMode="cover"
              style={{
                width: dimension.width / 3,
                height: dimension.width * 0.29,
                marginRight: 15,
                borderRadius: 10,
              }}
              source={item.img}
            />
            <View style={{flex: 1, paddingVertical: 10, paddingRight: 10}}>
              <TextFormatted
                numberOfLines={1}
                style={{
                  fontSize: 13,
                  color: theme.colors.primaryBlack,
                  fontWeight: '700',
                  width: '50%',
                }}>
                {item.name}
              </TextFormatted>

              <View style={{...styles.flexClass2}}>
                <Image
                  resizeMode="cover"
                  style={{
                    width: 13,
                    height: 13,
                    tintColor: theme.colors.darkGrey,
                    marginRight: 10,
                  }}
                  source={item.date}
                />
                <TextFormatted
                  style={{
                    fontSize: 12,
                    color: theme.colors.darkGrey,
                    fontWeight: '400',
                  }}>
                  12-03-2022
                </TextFormatted>
              </View>
              <View style={{...styles.flexClass2}}>
                <Image
                  resizeMode="cover"
                  style={{
                    width: 13,
                    height: 13,
                    tintColor: theme.colors.darkGrey,
                    marginRight: 10,
                  }}
                  source={item.time}
                />
                <TextFormatted
                  style={{
                    fontSize: 12,
                    color: theme.colors.darkGrey,
                    fontWeight: '400',
                  }}>
                  Fri, 12:30 – 11:00 pm
                </TextFormatted>
              </View>
              <View style={{...styles.flexClass2}}>
                <Image
                  resizeMode="cover"
                  style={{
                    width: 13,
                    height: 13,
                    tintColor: theme.colors.darkGrey,
                    marginRight: 10,
                  }}
                  source={item.location}
                />
                <TextFormatted
                  style={{
                    fontSize: 12,
                    color: theme.colors.darkGrey,
                    fontWeight: '400',
                  }}>
                  Pune, Maharashtra
                </TextFormatted>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Partyv;

const styles = StyleSheet.create({
  flexClass: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexClass2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
