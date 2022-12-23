import {
  Image,
  StyleSheet,
  View,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {theme} from '../../../utils/Constants';
import TextFormatted from '../../../component/TextFormatted';
import {useNavigation} from '@react-navigation/native';
const PastParty = ({marginHorizontal}) => {
  const dimension = useWindowDimensions();
  const navigation = useNavigation();
  const Data = [
    {
      img: require('../../../assets/Images/gig2.png'),
      name: 'Birthday Party',
      icon: require('../../../assets/Icon/mainStar.png'),
      icon: require('../../../assets/Icon/mainStar.png'),
      date: require('../../../assets/Icon/Datecalander.png'),
      time: require('../../../assets/Icon/time.png'),
      location: require('../../../assets/Icon/Locations.png'),
    },
    {
      img: require('../../../assets/Images/gig2.png'),
      name: 'Birthday Party',
      icon: require('../../../assets/Icon/mainStar.png'),
      date: require('../../../assets/Icon/Datecalander.png'),
      time: require('../../../assets/Icon/time.png'),
      location: require('../../../assets/Icon/Locations.png'),
    },
    {
      img: require('../../../assets/Images/gig2.png'),
      name: 'Birthday Party',
      icon: require('../../../assets/Icon/mainStar.png'),
      date: require('../../../assets/Icon/Datecalander.png'),
      time: require('../../../assets/Icon/time.png'),
      location: require('../../../assets/Icon/Locations.png'),
    },
    {
      img: require('../../../assets/Images/gig2.png'),
      name: 'Birthday Party',
      icon: require('../../../assets/Icon/mainStar.png'),
      date: require('../../../assets/Icon/Datecalander.png'),
      time: require('../../../assets/Icon/time.png'),
      location: require('../../../assets/Icon/Locations.png'),
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
        marginHorizontal: marginHorizontal,
      }}>
      <FlatList
        data={Data}
        renderItem={({item, i}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details')}
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
              marginHorizontal: 10,
              marginVertical: 10,
              overflow: 'hidden',
            }}>
            <Image
              resizeMode="cover"
              style={{
                width: dimension.width / 2.6,
                height: dimension.width * 0.3,
                marginRight: 15,
                borderRadius: 10,
              }}
              source={item.img}
            />
            <View style={{flex: 1, paddingVertical: 10, paddingRight: 10}}>
              <View style={{...styles.flexClass, alignItems: 'center'}}>
                <TextFormatted
                  style={{
                    fontSize: 16,
                    color: theme.colors.primaryBlack,
                    fontWeight: '700',
                  }}>
                  {item.name}
                </TextFormatted>

                <Image
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                  source={item.icon}
                />
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

export default PastParty;

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
