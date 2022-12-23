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
import {theme} from '../../utils/Constants';
import Statusbar from '../../component/Statusbar';
import Header2 from '../../component/Header2';
import {useNavigation, useRoute} from '@react-navigation/native';
import TextFormatted from '../../component/TextFormatted';

const Past = () => {
  const navigation = useNavigation();
  const Dimension = useWindowDimensions();
  const {params} = useRoute();
  console.log('params', params.title);
  const PastData = [
    {
      Img: require('../../assets/Images/party1.png'),
      name: 'Michael Malarkey',
      date: '12-03-2022',
      time: 'Fri, 12:30 – 11:00 pm',
      location: 'Pune, Maharashtra',
    },
    {
      Img: require('../../assets/Images/party2.png'),
      name: 'Zain Torff',
      date: '12-03-2022',
      time: 'Fri, 12:30 – 11:00 pm',
      location: 'Pune, Maharashtra',
    },
    {
      Img: require('../../assets/Images/party1.png'),
      name: 'Michael Malarkey',
      date: '12-03-2022',
      time: 'Fri, 12:30 – 11:00 pm',
      location: 'Pune, Maharashtra',
    },
    {
      Img: require('../../assets/Images/party2.png'),
      name: 'Zain Torff',
      date: '12-03-2022',
      time: 'Fri, 12:30 – 11:00 pm',
      location: 'Pune, Maharashtra',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2
        onPress={() => navigation.goBack()}
        title={params?.title}
        opacityR={1}
        sourceRight={require('../../assets/Icon/Chats.png')}
      />

      <FlatList
        data={PastData}
        renderItem={({item, i}) => (
          <View style={{width: Dimension.width - 20, ...styles.mainV}}>
            <TextFormatted
              style={{
                color: theme.colors.softGrey,
                backgroundColor: '#FFFFFF',
                fontSize: 12,
                fontWeight: '500',
                position: 'absolute',
                top: 10,
                left: 0,
                zIndex: 1,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}>
              {item.name}
            </TextFormatted>
            <Image
              source={item.Img}
              resizeMode="cover"
              style={{width: Dimension.width, height: Dimension.width * 0.5}}
            />
            <View style={styles.mainbox}>
              <View style={styles.flexBox}>
                <Image
                  resizeMode="cover"
                  style={{width: 15, height: 15}}
                  source={require('../../assets/Icon/Datecalander.png')}
                />
                <TextFormatted
                  style={{
                    color: theme.colors.darkGrey,
                    fontSize: 12,
                    fontWeight: '500',
                    marginLeft: 8,
                    marginTop: 4,
                  }}>
                  {item.date}
                </TextFormatted>
              </View>
              <View style={styles.flexBox}>
                <Image
                  resizeMode="cover"
                  style={{width: 15, height: 15}}
                  source={require('../../assets/Icon/time.png')}
                />
                <TextFormatted
                  style={{
                    color: theme.colors.darkGrey,
                    fontSize: 12,
                    fontWeight: '500',
                    marginLeft: 8,
                    marginTop: 4,
                  }}>
                  {item.time}
                </TextFormatted>
              </View>
            </View>

            <View style={styles.mainbox}>
              <View style={styles.flexBox}>
                <Image
                  resizeMode="cover"
                  style={{width: 15, height: 15}}
                  source={require('../../assets/Icon/Locations.png')}
                />
                <TextFormatted
                  style={{
                    color: theme.colors.darkGrey,
                    fontSize: 12,
                    fontWeight: '500',
                    marginLeft: 8,
                    marginTop: 4,
                  }}>
                  {item.location}
                </TextFormatted>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: theme.colors.maincolor,
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  paddingHorizontal: 35,
                  paddingVertical: 5,
                  borderRadius: 50,
                }}>
                <TextFormatted
                  style={{
                    color: theme.colors.primary,
                    fontSize: 12,
                    fontWeight: '500',
                    marginRight: 8,
                    marginTop: 4,
                  }}>
                  View All
                </TextFormatted>
                <Image
                  resizeMode="contain"
                  style={{width: 15, height: 15}}
                  source={require('../../assets/Icon/Nextarrow.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 8}} />
          </View>
        )}
      />
    </View>
  );
};

export default Past;

const styles = StyleSheet.create({
  mainV: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
    alignSelf: 'center',
    // height: 260,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mainbox: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
