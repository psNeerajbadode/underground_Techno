import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import TextFormatted from '../../component/TextFormatted';
import {GigsData} from '../../utils/ArrayData';
import {theme} from '../../utils/Constants';
import {useNavigation} from '@react-navigation/native';
import Statusbar from '../../component/Statusbar';

const Jobs = () => {
  const navigation = useNavigation();
  const Dimension = useWindowDimensions();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <FlatList
        data={GigsData}
        style={{marginTop: 70, marginBottom: 10}}
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
                  justifyContent: 'space-between',
                  marginRight: 20,
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

export default Jobs;

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
