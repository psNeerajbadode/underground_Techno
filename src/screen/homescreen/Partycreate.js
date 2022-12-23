import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Statusbar from '../../component/Statusbar';
import {theme} from '../../utils/Constants';
import TextFormatted from '../../component/TextFormatted';
import {useNavigation} from '@react-navigation/native';
import CustomeInput from '../../component/CustomeInput';
import {Switch} from 'react-native-paper';
import Button from '../../component/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomeDropDown from '../../component/CustomeDropDown';
import {DropData} from '../../utils/ArrayData';
const Partycreate = () => {
  const dimension = useWindowDimensions();
  const navigation = useNavigation();
  const [Active, setActive] = useState('Private');
  const [range, setRange] = useState([10, 20]);
  const AgeSliderValuesChange = values => setRange(values);
  const [age, setAge] = useState(true);
  const [pic, setPic] = useState();
  const [model, setmodel] = useState(false);
  const [gander, setGander] = useState();
  const [ShowDrop, setShowDrop] = useState(false);
  const Camera = () => {
    setmodel(false);
    launchCamera({}, Response => {
      if (!Response.didCancel) {
        setPic(Response.assets[0]?.uri);
      }
    });
  };
  const Gallery = () => {
    setmodel(false);
    launchImageLibrary(
      {mediaType: 'photo', selectionLimit: 1, quality: 1},
      Response => {
        if (!Response.didCancel) {
          setPic(Response.assets[0]?.uri);
        }
      },
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        translucent={true}
        hidden={false}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={{marginVertical: 20}} />
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
          onPress={() => setActive('Private')}
          style={{
            marginRight: 30,
            ...styles.tabclass,
            backgroundColor: Active == 'Private' ? '#500077' : '#fff',
            color: Active == 'Private' ? theme.colors.primary : '#500077',
          }}>
          Private
        </TextFormatted>
        <TextFormatted
          onPress={() => setActive('Public')}
          style={{
            backgroundColor: Active == 'Public' ? '#500077' : '#fff',
            color: Active == 'Public' ? theme.colors.primary : '#500077',
            ...styles.tabclass,
          }}>
          Public
        </TextFormatted>
      </View>

      <ScrollView style={{marginVertical: 15}}>
        <View style={{...styles.flexClass, marginHorizontal: 20}}>
          <TouchableOpacity
            onPress={() => setmodel(true)}
            style={{
              width: 140,
              height: 140,
              borderWidth: 3,
              borderColor: theme.colors.maincolor,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {!pic ? (
              <TextFormatted
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: theme.colors.softGrey,
                }}>
                Add photo
              </TextFormatted>
            ) : (
              <Image
                resizeMode="cover"
                style={{width: 135, height: 135, borderRadius: 5}}
                source={{uri: pic}}
              />
            )}
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <CustomeInput label={'Date'} />
            <CustomeInput label={'Time'} />
          </View>
        </View>
        <CustomeInput label={'Decription'} />
        <CustomeInput label={'Address'} />
        <CustomeDropDown
          label={'Gender invited'}
          DropData={DropData}
          MainPress={() => setShowDrop(!ShowDrop)}
          DropDown={ShowDrop}
          Value={!gander ? 'Select Item' : gander}
          renderItem={({item, i}) => (
            <TextFormatted
              style={{
                paddingHorizontal: 20,
                fontSize: 14,
                fontWeight: '500',
                color: theme.colors.primaryBlack,
                paddingVertical: 5,
              }}
              onPress={() => {
                setGander(item);
                setShowDrop(!ShowDrop);
              }}>
              {item}
            </TextFormatted>
          )}
        />
        <CustomeInput label={'Door Price'} />

        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextFormatted
            style={{
              color: theme.colors.primaryBlack,
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 20,
              flex: 3,
            }}>
            Age Range
          </TextFormatted>
          <Switch style={{flex: 1}} value={age} onValueChange={setAge} />
        </View>

        <View
          style={{
            ...styles.flexClass,
            marginHorizontal: 20,
            flex: 1,
          }}>
          <TextFormatted
            style={{
              color: theme.colors.primaryBlack,
              fontSize: 14,
              fontWeight: '500',
              paddingHorizontal: 8,
              paddingTop: 5,
              borderColor: '#E9BCFF80',
              borderWidth: 1,
              borderRadius: 5,
            }}>
            {/* {range[0]} */}18
          </TextFormatted>
          <MultiSlider
            value={[range[0], range[1]]}
            onValuesChange={AgeSliderValuesChange}
            sliderLength={dimension.width / 1.8}
            min={18}
            max={45}
            step={1}
            selectedStyle={{height: 5, backgroundColor: '#500077'}}
            markerContainerStyle={{alignSelf: 'center', marginTop: 2}}
            containerStyle={{alignItems: 'center', marginHorizontal: 10}}
            trackStyle={{height: 4, backgroundColor: '#E9BCFF80'}}
            markerStyle={{
              height: 20,
              width: 20,
              borderRadius: 40,
              backgroundColor: '#500077',
            }}
          />
          <TextFormatted
            style={{
              color: theme.colors.primaryBlack,
              fontSize: 14,
              fontWeight: '500',
              paddingHorizontal: 8,
              paddingTop: 5,
              borderColor: '#E9BCFF80',
              borderWidth: 1,
              borderRadius: 5,
            }}>
            {/* {range[1]} */} 45
          </TextFormatted>
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <TextFormatted
            style={{
              color: theme.colors.primaryBlack,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Avilable Tickets
          </TextFormatted>
          <View style={{...styles.flexClass1}}>
            <Ticketbttn title={'Total'} number={'T-500'} />
            <Ticketbttn title={'Avilable'} number={'T-250'} />
          </View>
        </View>
        <CustomeInput label={'Prepay on app price'} />
      </ScrollView>
      <Button
        onPress={() => navigation.navigate('Vendorlist')}
        buttonName={'Hire vendors/entertainment'}
      />
      <View style={{marginVertical: 10}} />
      <Button
        onPress={() => navigation.navigate('InviteFriend')}
        buttonName={'Create and invite friends'}
      />
      <Modal isVisible={model}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 10,
          }}>
          <TextFormatted
            onPress={() => {
              Camera();
            }}
            style={{
              marginVertical: 10,
              fontSize: 15,
              fontWeight: '600',
              color: theme.colors.primaryBlack,
            }}>
            Upload from Camera
          </TextFormatted>
          <TextFormatted
            onPress={() => {
              Gallery();
            }}
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: theme.colors.primaryBlack,
            }}>
            Upload from Gallery
          </TextFormatted>
        </View>
      </Modal>
    </View>
  );
};

const Ticketbttn = ({title, number, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      borderColor: '#E9BCFF40',
      borderWidth: 1,
      alignSelf: 'flex-start',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      marginRight: 20,
    }}>
    <TextFormatted
      style={{
        color: theme.colors.primaryBlack,
        fontSize: 13,
        fontWeight: '500',
      }}>
      {title}
    </TextFormatted>
    <TextFormatted
      style={{
        color: theme.colors.primaryBlack,
        fontSize: 13,
        fontWeight: '500',
      }}>
      {number}
    </TextFormatted>
  </TouchableOpacity>
);
export default Partycreate;

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
  flexClass1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
});
