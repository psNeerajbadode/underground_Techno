import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../utils/Constants';
import Statusbar from '../../component/Statusbar';
import CustomeInput from '../../component/CustomeInput';
import TextFormatted from '../../component/TextFormatted';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        translucent={true}
        hidden={false}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={{marginVertical: 30}} />

      <View
        style={{
          ...styles.FlexStyle,
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

      <SectionV
        heading={'SUGGESTIONS'}
        title1={'Within my country: India'}
        title2={'I support local travel!'}
      />
      <SectionV MainH title1={'Anywhere in the world'} text2 />
      <SectionV
        heading={'MY LAST SEARCHES'}
        title1={'Indore, MP, India'}
        text2
      />
    </View>
  );
};
const SectionV = ({heading, title1, title2, text2, Text1, source, MainH}) => (
  <View style={{marginHorizontal: 20, marginVertical: 20}}>
    {MainH || (
      <TextFormatted
        style={{
          fontSize: 18,
          color: theme.colors.primaryBlack,
          fontWeight: '700',
          marginBottom: 15,
        }}>
        {heading}
      </TextFormatted>
    )}
    <View style={{...styles.FlexStyle1}}>
      <Image
        resizeMode="contain"
        style={{width: 22, height: 22, marginRight: 20}}
        source={source || require('../../assets/Icon/Anywhere.png')}
      />
      <View>
        {Text1 || (
          <TextFormatted
            style={{
              fontSize: 14,
              color: theme.colors.primaryBlack,
              fontWeight: '600',
            }}>
            {title1}
          </TextFormatted>
        )}
        {text2 || (
          <TextFormatted style={{color: '#686868', fontSize: 12}}>
            {title2}
          </TextFormatted>
        )}
      </View>
    </View>
  </View>
);
export default SearchScreen;

const styles = StyleSheet.create({
  FlexStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  FlexStyle1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
