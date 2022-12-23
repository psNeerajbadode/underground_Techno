import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {theme} from '../../utils/Constants';
import Statusbar from '../../component/Statusbar';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../component/TextFormatted';
import {Chatmsg} from '../../utils/ArrayData';
import CustomeInput from '../../component/CustomeInput';

const Chatscreen = () => {
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
          marginHorizontal: 20,
          marginTop: 60,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={{alignSelf: 'flex-start'}}
          onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            source={require('../../assets/Icon/arrowR.png')}
            style={{
              width: 15,
              height: 15,
              transform: [{rotate: '180deg'}],
              marginTop: 14,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          source={require('../../assets/Images/User12.png')}
          style={{width: 40, height: 40, borderRadius: 50}}
        />
        <TextFormatted
          style={{
            flex: 1,
            fontSize: 15,
            fontWeight: '600',
            color: theme.colors.primaryBlack,
            marginHorizontal: 15,
          }}>
          johan smith
        </TextFormatted>
        <TopIcon />
        <TopIcon
          marginHorizontal={12}
          source={require('../../assets/Icon/Flage.png')}
        />
        <TopIcon source={require('../../assets/Icon/Infoes.png')} />
      </View>
      <View
        style={{
          borderBottomColor: '#0000001A',
          borderBottomWidth: 1,
          marginVertical: 5,
        }}
      />

      <FlatList
        data={Chatmsg}
        style={{marginHorizontal: 20, marginVertical: 20}}
        renderItem={({item, i}) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: !item.reciver ? 'flex-start' : 'flex-end',
              marginVertical: !item.reciver ? 18 : 5,
            }}>
            {!item.reciver && (
              <Image
                resizeMode="contain"
                source={require('../../assets/Images/User12.png')}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 50,
                }}
              />
            )}
            <TextFormatted
              style={{
                backgroundColor: !item.reciver
                  ? '#F4F4F4'
                  : theme.colors.maincolor,
                paddingVertical: 8,
                paddingHorizontal: 20,
                borderRadius: 50,
                fontSize: 14,
                fontWeight: '500',
                color: !item.reciver
                  ? theme.colors.primaryBlack
                  : theme.colors.primary,
                marginLeft: 10,
              }}>
              {item.msg}
            </TextFormatted>
          </View>
        )}
      />
      <View
        style={{
          borderTopColor: '#0000001A',
          borderTopWidth: 1,
          marginTop: 5,
        }}
      />

      <CustomeInput
        InbackgroundColor={'#32343633'}
        placeholder={'Type your message here...'}
        placeholderTextColor={theme.colors.primary}
        paddingLeft={20}
        borderRadius={50}
        Icon={
          <View
            style={{
              position: 'absolute',
              top: '15%',
              right: '3%',
              zIndex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/Icon/Chatplus.png')}
              resizeMode="contain"
              style={{
                width: 19,
                height: 19,
                marginRight: 15,
              }}
            />
            <Image
              source={require('../../assets/Icon/sendtext.png')}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
              }}
            />
          </View>
        }
      />
    </View>
  );
};

const TopIcon = ({onPress, source, marginHorizontal}) => (
  <TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={onPress}>
    <Image
      resizeMode="contain"
      source={source || require('../../assets/Icon/Video.png')}
      style={{
        width: 26,
        height: 26,
        marginHorizontal: marginHorizontal,
        marginTop: 6,
      }}
    />
  </TouchableOpacity>
);
export default Chatscreen;

const styles = StyleSheet.create({
  FlexStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
