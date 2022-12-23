import {Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../utils/Constants';
import Statusbar from '../../component/Statusbar';
import Header2 from '../../component/Header2';
import {useNavigation} from '@react-navigation/native';
import TextFormatted from '../../component/TextFormatted';
import Button from '../../component/Button';
import CustomeInput from '../../component/CustomeInput';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';

const EditProfile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Johan smiths');
  const [username, setUsername] = useState('Johan smiths123');
  const [bio, setBio] = useState(
    'Lorem ipsum dolor sit amet consectetur. Viverra dignissim ac tincidunt non sed. Sit ultricies in urna porta imperdiet volutpat nibh nam id. Id neque sit diam pellentesque sed id integer.',
  );
  const [pic, setPic] = useState();
  const [model, setmodel] = useState(false);

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
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2
        onPress={() => navigation.goBack()}
        title={'Edit Profile'}
        RightT={
          <TextFormatted
            onPress={() => navigation.navigate('Profile')}
            style={{
              fontWeight: '700',
              fontSize: 15,
              color: theme.colors.primaryBlack,
            }}>
            Done
          </TextFormatted>
        }
      />

      <Image
        resizeMode="contain"
        style={{
          width: 96,
          height: 96,
          borderRadius: 50,
          marginBottom: 10,
          alignSelf: 'center',
        }}
        source={!pic ? require('../../assets/Images/User12.png') : {uri: pic}}
      />
      <TextFormatted
        onPress={() => setmodel(true)}
        style={{
          textAlign: 'center',
          marginBottom: 20,
          color: theme.colors.maincolor,
          fontWeight: '600',
          fontSize: 13,
        }}>
        Edit Picture
      </TextFormatted>
      <CustomeInput
        Incolor={'#767676'}
        infontWeight={'600'}
        label={'Name'}
        value={name}
        onChangeText={setName}
        paddingLeft={20}
      />
      <CustomeInput
        Incolor={'#767676'}
        infontWeight={'600'}
        label={'Email'}
        value={username}
        onChangeText={setUsername}
        paddingLeft={20}
      />
      <CustomeInput
        InlineHeight={18}
        Incolor={'#767676'}
        infontWeight={'600'}
        multiline
        textAlignVertical={'top'}
        heightIn={120}
        label={'Bio'}
        value={bio}
        onChangeText={setBio}
        paddingLeft={20}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          width: '100%',
          alignSelf: 'center',
        }}>
        <Button
          buttonName={'save'}
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
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

export default EditProfile;

const styles = StyleSheet.create({});
