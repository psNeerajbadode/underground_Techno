import {
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import Statusbar from '../../component/Statusbar';
import {theme} from '../../utils/Constants';
import Header2 from '../../component/Header2';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../component/TextFormatted';
import Button from '../../component/Button';

const NotificationScreen = () => {
  const navigation = useNavigation();
  const dimension = useWindowDimensions();
  const Data = [
    {
      img: require('../../assets/Images/User23.png'),
      name: 'David Silbia',
      title: 'Invite Jo Malone London’s Mother’s ',
      time: 'Just now',
      button: true,
    },

    {
      img: require('../../assets/Images/User12.png'),
      name: 'Adnan Safi',
      title: '  Started following you',
      time: '5 min ago',
      button: false,
    },

    {
      img: require('../../assets/Images/User23.png'),
      name: 'Joan Baker',
      title: 'Invite A virtual Evening of Smooth Jazz',
      time: '20 min ago',
      button: true,
    },

    {
      img: require('../../assets/Images/User12.png'),
      name: 'Ronald C.',
      title: 'Kinch Like you events',
      time: '1 hr ago',
      button: false,
    },
    {
      img: require('../../assets/Images/User23.png'),
      name: 'Eric G. Prickett',
      title: 'Started following you',
      time: 'Wed, 3:30 pm',
      button: false,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2 onPress={() => navigation.goBack()} title={'Notification'} />

      <FlatList
        data={Data}
        renderItem={({item, i}) => (
          <View
            style={{
              ...styles.flexClass,
              marginBottom: 20,
              borderRadius: 10,
              marginHorizontal: 10,
              marginVertical: 10,
              overflow: 'hidden',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="cover"
              style={{
                width: 70,
                height: 70,
                marginRight: 15,
                borderRadius: 50,
              }}
              source={item.img}
            />
            <View style={{flex: 1, marginRight: 20}}>
              <View
                style={{
                  ...styles.flexClass,
                }}>
                <TextFormatted
                  style={{
                    fontSize: 16,
                    color: theme.colors.primaryBlack,
                    fontWeight: '600',
                  }}>
                  {item.name}
                </TextFormatted>

                <TextFormatted
                  style={{
                    fontSize: 12,
                    color: theme.colors.darkGrey,
                    fontWeight: '400',
                  }}>
                  {item.time}
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
              {item.button == true && (
                <View
                  style={{
                    ...styles.flexClass,
                    marginTop: 5,
                  }}>
                  <Button
                    backgroundColor={'#fff'}
                    color={'#706D6D'}
                    height={35}
                    width={'45%'}
                    fontWeight={'600'}
                    buttonName={'Reject'}
                    paddingVertical={7}
                    borderColor={'#706D6D50'}
                    borderWidth={1}
                  />
                  <Button
                    height={35}
                    width={'45%'}
                    fontWeight={'600'}
                    buttonName={'Accept'}
                    paddingVertical={7}
                  />
                </View>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  flexClass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexClass2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
