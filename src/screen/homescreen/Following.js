import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header2 from '../../component/Header2';
import Statusbar from '../../component/Statusbar';
import {theme} from '../../utils/Constants';
import CustomeInput from '../../component/CustomeInput';
import TextFormatted from '../../component/TextFormatted';

const Following = () => {
  const [Search, setSearch] = useState();
  const [friend, setFriend] = useState([]);
  console.log('friend', friend);
  const Data = [
    {
      id: 1,
      img: require('../../assets/Images/User12.png'),
      name: 'Ruben Carder963',
      title: 'Ruben Carder',
    },
    {
      id: 2,
      img: require('../../assets/Images/User12.png'),
      name: 'Haylie Kenter745',
      title: 'Haylie Kenter745',
    },
    {
      id: 3,
      img: require('../../assets/Images/User12.png'),
      name: 'Corey Schleifer412',
      title: 'Corey Schleifer412',
    },
    {
      id: 4,
      img: require('../../assets/Images/User12.png'),
      name: 'Marley Rosser824',
      title: 'Marley Rosser824',
    },
    {
      id: 5,
      img: require('../../assets/Images/User12.png'),
      name: 'Haylie Kenter745',
      title: 'Haylie Kenter745',
    },
    {
      id: 6,
      img: require('../../assets/Images/User12.png'),
      name: 'Ahmad Ekstrom965 ',
      title: 'Ahmad Ekstrom965 ',
    },
    {
      id: 7,
      img: require('../../assets/Images/User12.png'),
      name: 'Kierra Workman478',
      title: 'Kierra Workman478',
    },
    {
      id: 8,
      img: require('../../assets/Images/User12.png'),
      name: 'Maren Dorwart351',
      title: 'Maren Dorwart351',
    },
    {
      id: 9,
      img: require('../../assets/Images/User12.png'),
      name: 'Emerson Bergson153',
      title: 'Emerson Bergson153',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2 title={'Following'} />
      <CustomeInput
        vmarginVertical={-5}
        borderRadius={15}
        paddingLeft={50}
        Icon={
          <Image
            resizeMode="cover"
            style={{
              width: 18,
              height: 18,
              position: 'absolute',
              top: '30%',
              left: 20,
              zIndex: 1,
            }}
            source={require('../../assets/Icon/Search.png')}
          />
        }
        placeholder={'Search Following User'}
        onChangeText={setSearch}
        value={Search}
      />
      <FlatList
        style={{marginVertical: 20}}
        data={Data}
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

            <View style={{marginRight: '5%'}}>
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
                borderColor: friend.find(v => v == item.name)
                  ? '#EFEFEF'
                  : theme.colors.maincolor,
                borderWidth: 2,
                alignItems: 'center',
                borderRadius: 8,
                paddingHorizontal: 10,
                paddingVertical: 4,
                backgroundColor: friend.find(v => v == item.name)
                  ? '#EFEFEF'
                  : '#fff',
              }}>
              <TextFormatted
                style={{
                  fontSize: 12,
                  color: friend.find(v => v == item.name)
                    ? '#959595'
                    : theme.colors.primaryBlack,
                  fontWeight: '700',
                }}>
                {friend.find(v => v == item.name) ? 'Remove' : 'Friends'}
              </TextFormatted>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Following;

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
