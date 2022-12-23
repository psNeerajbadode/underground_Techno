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
import Statusbar from '../../component/Statusbar';
import {theme} from '../../utils/Constants';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../component/TextFormatted';
import {GigsData} from '../../utils/ArrayData';

const Gigs = () => {
  const navigation = useNavigation();
  const Dimension = useWindowDimensions();

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <View style={{...styles.flexBox}}>
        <TopSct source={require('../../assets/Icon/LocationG.png')} />
        <TopSct source={require('../../assets/Icon/distance.png')} />
        <TopSct source={require('../../assets/Icon/Search2.png')} />
      </View>

      <FlatList
        data={GigsData}
        style={{marginTop: 30, marginBottom: 10}}
        renderItem={({item, i}) => (
          <View style={styles.listBox}>
            <Image
              source={item.Img}
              resizeMode="cover"
              style={{width: Dimension.width / 3, height: 100}}
            />
            <View style={{flex: 1, marginLeft: 15}}>
              <TextFormatted
                style={{fontSize: 14, fontWeight: '600', color: '#000'}}>
                {item.title}
              </TextFormatted>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <TextFormatted
                  style={{
                    backgroundColor: theme.colors.maincolor,
                    fontSize: 14,
                    fontWeight: '600',
                    color: theme.colors.primary,
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderRadius: 5,
                  }}>
                  Apply
                </TextFormatted>
                <TextFormatted
                  style={{
                    marginLeft: 25,
                    fontSize: 14,
                    fontWeight: '600',
                    color: theme.colors.maincolor,
                  }}>
                  {item.princ}
                </TextFormatted>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const TopSct = ({onPress, source}) => (
  <TouchableOpacity onPress={onPress} style={{alignSelf: 'center'}}>
    <Image
      resizeMode="contain"
      style={{width: 34, height: 34}}
      source={source}
    />
  </TouchableOpacity>
);
export default Gigs;

const styles = StyleSheet.create({
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 60,
  },
  listBox: {
    marginVertical: 15,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
