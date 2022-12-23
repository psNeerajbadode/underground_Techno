import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Statusbar from '../../component/Statusbar';
import {theme} from '../../utils/Constants';
import CustomeInput from '../../component/CustomeInput';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../component/TextFormatted';
import {ChatList} from '../../utils/ArrayData';

const DMscreen = () => {
  const [Active, setActive] = useState('Profile');
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
      <View
        style={{
          ...styles.FlexStyle,
          marginTop: 40,
          marginBottom: 20,
        }}>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={{width: 48, height: 48, marginRight: -8}}
            source={require('../../assets/Icon/Backarrow.png')}
          />
        </TouchableOpacity>
        <CustomeInput
          vmarginHorizontal={0}
          flex={1}
          placeholder={'Type a destination'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextFormatted
          onPress={() => setActive('Profile')}
          style={{
            ...styles.tabclass,
            borderBottomColor: Active == 'Profile' ? '#500077' : '#fff',
          }}>
          Profile
        </TextFormatted>
        <TextFormatted
          onPress={() => setActive('Messagesent')}
          style={{
            ...styles.tabclass,
            borderBottomColor: Active == 'Messagesent' ? '#500077' : '#fff',
          }}>
          Message sent
        </TextFormatted>
      </View>
      {Active == 'Profile' ? (
        <FlatList
          style={{marginVertical: 20}}
          data={ChatList}
          renderItem={({item, i}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Chatscreen')}
              style={{
                ...styles.flexClass,
                borderBottomColor: '#DBDBDB',
                borderBottomWidth: 1,
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  marginLeft: 25,
                }}
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
                    color: theme.colors.primaryBlack,
                    fontWeight: '400',
                  }}>
                  {item.title}
                </TextFormatted>
              </View>

              <Text
                style={{
                  marginRight: 30,
                  fontSize: 12,
                  color: theme.colors.darkGrey,
                  fontWeight: '400',
                }}>
                4h ago
              </Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <FlatList
          style={{marginVertical: 20}}
          data={ChatList}
          renderItem={({item, i}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Chatscreen')}
              style={{
                ...styles.flexClass,
                borderBottomColor: '#DBDBDB',
                borderBottomWidth: 1,
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  marginLeft: 25,
                }}
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
                    color: theme.colors.primaryBlack,
                    fontWeight: '400',
                  }}>
                  {item.title}
                </TextFormatted>
              </View>

              <Text
                style={{
                  marginRight: 30,
                  fontSize: 12,
                  color: theme.colors.darkGrey,
                  fontWeight: '400',
                }}>
                4h ago
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default DMscreen;

const styles = StyleSheet.create({
  FlexStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  tabclass: {
    fontWeight: '500',
    fontSize: 16,
    borderBottomWidth: 2,
    paddingBottom: 4,
    color: theme.colors.softGrey,
    width: '50%',
    textAlign: 'center',
  },
  flexClass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 15,
    overflow: 'hidden',
  },
});
