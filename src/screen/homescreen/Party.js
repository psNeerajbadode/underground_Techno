import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../utils/Constants';
import Statusbar from '../../component/Statusbar';
import TextFormatted from '../../component/TextFormatted';
import PastParty from './Components/PastParty';
import Event from './Components/Event';
import {useNavigation} from '@react-navigation/native';

const Party = () => {
  const dimension = useWindowDimensions();
  const navigation = useNavigation();
  const [topbtn, setTopbtn] = useState(1);
  const [Active, setActive] = useState('Party');
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <View style={{marginVertical: 25}} />
      <View
        style={{
          ...styles.flexClass,
          marginHorizontal: 10,
        }}>
        <TopButton
          onPress={() => setTopbtn(1)}
          backgroundColor={topbtn == 1 ? '#500077' : '#E9BCFF'}
        />
        <TopButton
          source={require('../../assets/Icon/Range1.png')}
          onPress={() => setTopbtn(2)}
          backgroundColor={topbtn == 2 ? '#500077' : '#E9BCFF'}
        />
        <TopButton
          source={require('../../assets/Icon/Map1.png')}
          onPress={() => setTopbtn(3)}
          backgroundColor={topbtn == 3 ? '#500077' : '#E9BCFF'}
        />
        <TopButton
          source={require('../../assets/Icon/Add1.png')}
          onPress={() => {
            setTopbtn(4);
            navigation.navigate('Eventcreate');
          }}
          backgroundColor={topbtn == 4 ? '#500077' : '#E9BCFF'}
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          marginTop: 20,
        }}>
        <TextFormatted
          onPress={() => setActive('Party')}
          style={{
            marginRight: 30,
            ...styles.tabclass,
            backgroundColor: Active == 'Party' ? '#500077' : '#fff',
            color: Active == 'Party' ? theme.colors.primary : '#500077',
          }}>
          Party
        </TextFormatted>
        <TextFormatted
          onPress={() => setActive('Event')}
          style={{
            backgroundColor: Active == 'Event' ? '#500077' : '#fff',
            color: Active == 'Event' ? theme.colors.primary : '#500077',
            ...styles.tabclass,
          }}>
          Event
        </TextFormatted>
      </View>
      {Active == 'Party' ? (
        <PastParty marginHorizontal={10} />
      ) : (
        <Event
          CustomText={
            <TextFormatted
              style={{
                color: theme.colors.Yellow,
                fontWeight: '700',
                fontSize: 12,
                marginVertical: 1,
              }}>
              UPCOMING
            </TextFormatted>
          }
        />
      )}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'center',
          marginVertical: 10,
          width: '95%',
        }}>
        <TextFormatted
          onPress={() => navigation.navigate('ApprovedParties')}
          style={{
            backgroundColor: '#500077',
            color: theme.colors.primary,
            ...styles.tabclass,

            marginRight: 10,
            paddingHorizontal: 13,
          }}>
          Approved Parties
        </TextFormatted>
        <TextFormatted
          onPress={() => navigation.navigate('FavoritedParties')}
          style={{
            backgroundColor: '#500077',
            color: theme.colors.primary,
            ...styles.tabclass,
            paddingHorizontal: 13,
          }}>
          Favorited parties
        </TextFormatted>
      </View>
    </View>
  );
};

const TopButton = ({backgroundColor, source, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      flex: 1,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundColor,
      marginHorizontal: 5,
      borderRadius: 5,
    }}>
    <Image
      resizeMode="contain"
      style={{width: 20, height: 20}}
      source={source || require('../../assets/Icon/Location1.png')}
    />
  </TouchableOpacity>
);
export default Party;

const styles = StyleSheet.create({
  flexClass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabclass: {
    paddingHorizontal: 20,
    paddingTop: 10,
    fontWeight: '600',
    fontSize: 15,
    borderRadius: 10,
    borderWidth: 2,
    paddingBottom: 4,
    borderColor: '#500077',
  },
});
