import {
  FlatList,
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
import CustomeInput from '../../component/CustomeInput';
import {useNavigation} from '@react-navigation/native';
import {InviteData} from '../../utils/ArrayData';
import Button from '../../component/Button';
import Header2 from '../../component/Header2';

const Vendorlist = () => {
  const [search, setSearch] = useState();
  const [friend, setFriend] = useState([]);
  const dimension = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        translucent={true}
        hidden={false}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />

      <Header2 title={'Invite Friend'} />

      <FlatList
        style={{marginBottom: 20}}
        data={InviteData}
        renderItem={({item, i}) => (
          <View
            style={{
              ...styles.flexClass,
            }}>
            <Image
              resizeMode="contain"
              style={{width: 60, height: 60, borderRadius: 50}}
              source={item.img}
            />

            <View style={{marginRight: '5%', flex: 1, marginLeft: 15}}>
              <TextFormatted
                style={{
                  fontSize: 14,
                  color: theme.colors.primaryBlack,
                  fontWeight: '700',
                }}>
                {item.name}
              </TextFormatted>
              <TextFormatted
                style={{
                  fontSize: 12,
                  color: theme.colors.darkGrey,
                  fontWeight: '600',
                }}>
                {item.title}
              </TextFormatted>
            </View>

            <TouchableOpacity
              onPress={() =>
                setFriend(prevState =>
                  prevState.find(v => item.name == v)
                    ? prevState.filter(v => item.name != v)
                    : [...prevState, item.name],
                )
              }
              style={{
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{width: 20, height: 20}}
                source={
                  friend.find(v => v == item.name)
                    ? require('../../assets/Icon/CheckSelect.png')
                    : require('../../assets/Icon/CheckboxNoSelect.png')
                }
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <Button
        onPress={() => navigation.navigate('Homenavigation')}
        buttonName={'Hire Vendor'}
      />
    </View>
  );
};

export default Vendorlist;

const styles = StyleSheet.create({
  flexClass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    padding: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    overflow: 'hidden',
  },
});
