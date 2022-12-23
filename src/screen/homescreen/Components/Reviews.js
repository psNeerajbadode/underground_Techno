import {Image, StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {theme} from '../../../utils/Constants';
import TextFormatted from '../../../component/TextFormatted';

const Reviews = () => {
  const star = [1, 2, 3, 4];
  const Data = [
    {
      img: require('../../../assets/Images/User12.png'),
      name: 'Rocks Velkeinjen',
    },
    {
      img: require('../../../assets/Images/User12.png'),
      name: 'Angelina Zolly',
    },
    {
      img: require('../../../assets/Images/User12.png'),
      name: 'Zenifero Bolex',
    },
    {
      img: require('../../../assets/Images/User12.png'),
      name: 'Rocks Velkeinjen',
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
              padding: 10,
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <Image
              resizeMode="contain"
              style={{width: 40, height: 40, borderRadius: 50, marginRight: 15}}
              source={item.img}
            />
            <View style={{flex: 1}}>
              <View style={{...styles.flexClass, alignItems: 'center'}}>
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
                    fontSize: 14,
                    color: theme.colors.darkGrey,
                    fontWeight: '600',
                  }}>
                  10 Feb
                </TextFormatted>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                {star.map((v, i) => (
                  <Image
                    resizeMode="contain"
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 5,
                      marginBottom: 5,
                    }}
                    source={require('../../../assets/Icon/star.png')}
                  />
                ))}
              </View>

              <TextFormatted
                style={{
                  fontSize: 14,
                  color: theme.colors.primaryBlack,
                  fontWeight: '500',
                }}>
                Cinemas is the ultimate experience to see new movies in Gold
                Class or Vmax. Find a cinema near you.
              </TextFormatted>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  flexClass: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
});
