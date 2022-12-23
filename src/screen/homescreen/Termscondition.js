import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../utils/Constants';
import Header2 from '../../component/Header2';
import Statusbar from '../../component/Statusbar';
import Button from '../../component/Button';
import TextFormatted from '../../component/TextFormatted';
import {useNavigation} from '@react-navigation/native';

const Termscondition = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2
        onPress={() => navigation.goBack()}
        title={'Check terms and condition'}
      />
      <ScrollView style={{flex: 1, marginBottom: 100}}>
        <TextFormatted
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: theme.colors.primaryBlack,
            marginHorizontal: 20,
            lineHeight: 21,
            textAlign: 'justify',
          }}>
          Lorem ipsum dolor sit amet consectetur. In aliquet hac tincidunt
          congue tellus pellentesque vestibulum. Ultrices ac elementum et non
          volutpat venenatis dictum id id. Massa tellus fermentum orci ut
          praesent elementum. Dictumst nibh egestas ultricies diam neque id vel
          netus eget. Augue nulla tincidunt vitae auctor amet malesuada feugiat.
          Euismod sed tristique tellus scelerisque in lectus nec. Eu laoreet
          pellentesque pretium fermentum vel faucibus. Id est ullamcorper vel
          congue lacus. Ut quis est justo tincidunt purus. Aliquet condimentum
          varius in odio bibendum vulputate. Maecenas sem quis nibh lacus.
          Sagittis nullam rutrum convallis nullam neque metus non eget pulvinar.
          Tortor enim amet tellus malesuada faucibus a suspendisse. Praesent
          dignissim sollicitudin dictum tristique at elementum ut interdum. Non
          volutpat velit enim enim ac pulvinar. Nulla ullamcorper aliquam ut
          duis sed. Imperdiet sem morbi habitasse risus. In pretium arcu proin
          massa proin vivamus pellentesque. Elementum massa suspendisse tortor
          nulla diam. Mi in vel sed justo nec curabitur. Donec nunc dignissim
          convallis nisi adipiscing urna vestibulum sed congue. Placerat enim
          mattis turpis lacus eget quis. Risus.
        </TextFormatted>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          width: '100%',
          alignSelf: 'center',
        }}>
        <Button buttonName={'submit'} />
      </View>
    </View>
  );
};

export default Termscondition;

const styles = StyleSheet.create({});
