import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Statusbar from '../../component/Statusbar';
import {theme} from '../../utils/Constants';
import Header2 from '../../component/Header2';
import TextFormatted from '../../component/TextFormatted';
import {AirbnbRating, Rating} from 'react-native-ratings';
import CustomeInput from '../../component/CustomeInput';
import Button from '../../component/Button';
import {useNavigation} from '@react-navigation/native';
const Rateapp = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(3);
  const [description, setDescription] = useState();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2 onPress={() => navigation.goBack()} title={'Rate app'} />
      <View
        style={{
          flexGrow: 1,
        }}>
        <View
          style={{
            backgroundColor: '#F4F5F9',
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#D1D1D1',
            alignItems: 'center',
            padding: 15,
          }}>
          <TextFormatted
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: theme.colors.primaryBlack,
            }}>
            What do you think ?
          </TextFormatted>
          <TextFormatted
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: theme.colors.darkGrey,
              textAlign: 'center',
              lineHeight: 23,
              marginVertical: 5,
            }}>
            Please give your rating by clicking on the stars below
          </TextFormatted>
          <TextFormatted
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: theme.colors.maincolor,
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}>
            Show all reviews
          </TextFormatted>

          <AirbnbRating
            showRating={false}
            unSelectedColor="#737373"
            defaultRating={rating}
            count={5}
            size={30}
            ratingCount={5}
            type="custom"
            selectedColor="#FFC107"
            onFinishRating={e => setRating(e)}
            starImage={require('../../assets/Icon/star.png')}
          />
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            backgroundColor: '#fff',
            elevation: 5,
            borderColor: '#E9BCFF40',
            borderWidth: 1,
            marginHorizontal: 20,
            borderRadius: 10,
          }}>
          <CustomeInput
            vmarginHorizontal={0}
            vmarginVertical={0}
            heightIn={144}
            textAlignVertical={'top'}
            paddingLeft={25}
            placeholderTextColor={'#868889'}
            Incolor={'#868889'}
            infontWeight={'600'}
            multiline={true}
            onChangeText={setDescription}
            value={description}
            inborderColor={'transparent'}
            Icon={
              <Image
                source={require('../../assets/Icon/WriteIco.png')}
                resizeMode="cover"
                style={{
                  width: 14,
                  height: 14,
                  position: 'absolute',
                  top: 15,
                  // left: '5%',
                  zIndex: 1,
                }}
              />
            }
            placeholder={'Tell us about your experience'}
          />
        </View>
      </View>
      <Button
        buttonName={'submit'}
        onPress={() => navigation.navigate('Setting')}
        marginVertical={20}
      />
    </View>
  );
};

export default Rateapp;

const styles = StyleSheet.create({});
