import {
  Image,
  StyleSheet,
  View,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {theme} from '../../../utils/Constants';
import TextFormatted from '../../../component/TextFormatted';

const Event = ({CustomText}) => {
  const dimension = useWindowDimensions();
  const Data = [
    {
      img: require('../../../assets/Images/party1.png'),
      name: 'Shelija Concert',
      title: 'Event Time- 08:00- 9:00 AM',
      prce: '$20',
      location: 'Vijay Nagar',
    },
    {
      img: require('../../../assets/Images/party1.png'),
      name: 'Shelija Concert',
      title: 'Event Time- 08:00- 9:00 AM',
      prce: '$20',
      location: 'Vijay Nagar',
    },
    {
      img: require('../../../assets/Images/party1.png'),
      name: 'Shelija Concert',
      title: 'Event Time- 08:00- 9:00 AM',
      prce: '$20',
      location: 'Vijay Nagar',
    },
    {
      img: require('../../../assets/Images/party1.png'),
      name: 'Shelija Concert',
      title: 'Event Time- 08:00- 9:00 AM',
      prce: '$20',
      location: 'Vijay Nagar',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
      }}>
      <FlatList
        data={Data}
        renderItem={({item, i}) => (
          <View
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
                width: dimension.width / 3,
                height: dimension.width * 0.3,
                marginRight: 15,
              }}
              source={item.img}
            />
            <View style={{flex: 1, marginRight: 20}}>
              <View
                style={{
                  ...styles.flexClass,
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <TextFormatted
                  style={{
                    fontSize: 16,
                    color: theme.colors.primaryBlack,
                    fontWeight: '700',
                  }}>
                  {item.name}
                </TextFormatted>

                <TextFormatted
                  style={{
                    fontSize: 12,
                    color: theme.colors.maincolor,
                    fontWeight: '700',
                  }}>
                  {item.prce}
                </TextFormatted>
              </View>

              <TextFormatted
                style={{
                  fontSize: 12,
                  color: theme.colors.darkGrey,
                  fontWeight: '400',
                }}>
                {item.title}
              </TextFormatted>

              <TextFormatted
                style={{
                  fontSize: 12,
                  color: theme.colors.primaryBlack,
                  fontWeight: '600',
                }}>
                {item.location}
              </TextFormatted>
              {CustomText}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Event;

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
