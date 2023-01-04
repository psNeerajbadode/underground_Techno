import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Statusbar from '../../component/Statusbar';
import {theme} from '../../utils/Constants';
import {Calendar} from 'react-native-calendars';
import TextFormatted from '../../component/TextFormatted';
import {useState} from 'react';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import Header2 from '../../component/Header2';
import CustomeInput from '../../component/CustomeInput';
const Calendarscreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState();
  const [partycheck, setpartycheck] = useState();
  const [partyhost, setPartyhost] = useState();
  //   const months = moment.months(new Date());
  const Partychecked = ['Past', 'Recently approved', 'Favorited partys'];
  const Partyhosting = ['Past', 'Current'];

  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
        translucent={false}
      />

      {/* <Header2
        onPress={() => navigation.goBack()}
        Tcolor={theme.colors.maincolor}
        TfontSize={16}
        title={' Select Date'}
      /> */}

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

      <Calendar
        // onDayPress={day => setSelectedDate(day)}
        // markingType={'period'}
        // markedDates={{
        //   [moment(selectedDate.day).format('yyyy-MM-DD')]: {
        //     selected: true,
        //     disableTouchEvent: true,
        //     selectedColor: '#f00',
        //   },
        // }}
        monthFormat={'MMM yyyy'}
        hideArrows
        hideExtraDays
        style={{marginHorizontal: 10, marginBottom: 20}}
        theme={{
          calendarBackground: theme.colors.primary,
          selectedDayBackgroundColor: theme.colors.maincolor,
          todayTextColor: theme.colors.maincolor,
          dayTextColor: '#500077',
          monthTextColor: '#000',
          textDayFontFamily: 'Poppins-SemiBold',
          textMonthFontFamily: 'Poppins-SemiBold',
          textDayHeaderFontFamily: 'Poppins-SemiBold',
          textDayFontWeight: '500',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 12,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
        }}
      />

      <PartyComponent
        data={Partychecked}
        title={'Partys you checked into'}
        setPartyselect={setpartycheck}
        selected={partycheck}
        Onpress2={
          partycheck != null && navigation.navigate('Past', {title: partycheck})
        }
      />
      <PartyComponent
        data={Partyhosting}
        title={'Partys your hosting'}
        setPartyselect={setPartyhost}
        selected={partyhost}
        // Onpress2={partycheck != null && navigation.navigate({'Past', partyhost})}
      />
    </ScrollView>
  );
};

const PartyComponent = ({setPartyselect, title, data, selected, Onpress2}) => (
  <View style={{marginHorizontal: 20, marginBottom: 30}}>
    <TextFormatted
      style={{
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'left',
        color: theme.colors.softGrey,
      }}>
      {title}
    </TextFormatted>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}>
      {data.map(v => (
        <TextFormatted
          onPress={() => {
            setPartyselect(v);
            Onpress2;
          }}
          style={{
            textAlignVertical: 'center',
            backgroundColor:
              selected == v ? theme.colors.maincolor : theme.colors.primary,
            textAlign: 'left',
            paddingHorizontal: 25,
            paddingVertical: 12,
            marginRight: 20,
            marginBottom: 20,
            color:
              selected == v ? theme.colors.primary : theme.colors.maincolor,
            fontSize: 10,
            fontWeight: '500',
            borderRadius: 6,
            borderWidth: 2,
            borderColor: theme.colors.maincolor,
          }}>
          {v}
        </TextFormatted>
      ))}
    </View>
  </View>
);
export default Calendarscreen;

const styles = StyleSheet.create({
  FlexStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
});
