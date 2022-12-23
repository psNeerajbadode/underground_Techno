import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextFormatted from '../../component/TextFormatted';
import {theme} from '../../utils/Constants';
import {Switch} from 'react-native-paper';
import Statusbar from '../../component/Statusbar';
import Header2 from '../../component/Header2';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const Allownotifications = () => {
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(true);
  const [email, setEmail] = useState(false);
  const [order, setOrder] = useState(false);
  const [general, setGeneral] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
      <Statusbar
        hidden={false}
        backgroundColor={theme.colors.primary}
        barStyle={'dark-content'}
      />
      <Header2
        onPress={() => navigation.goBack()}
        title={'Allow notifications'}
      />
      <NotifyAllow
        title={'Allow Notifcations'}
        toggle={toggle}
        setToggle={setToggle}
      />
      <NotifyAllow
        title={'Email Notifcations'}
        toggle={email}
        setToggle={setEmail}
      />

      <NotifyAllow
        title={'Order Notifcations'}
        toggle={order}
        setToggle={setOrder}
      />
      <NotifyAllow
        title={'General Notifcations'}
        toggle={general}
        setToggle={setGeneral}
      />
    </View>
  );
};

const NotifyAllow = ({toggle, title, setToggle}) => (
  <View style={{marginBottom: 20, marginTop: 10}}>
    <TextFormatted
      style={{
        color: theme.colors.primaryBlack,
        fontSize: 15,
        fontWeight: '600',
        marginHorizontal: 20,
        marginVertical: 10,
      }}>
      {title}
    </TextFormatted>

    <View
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
      }}>
      <TextFormatted
        style={{
          color: theme.colors.darkGrey,
          fontSize: 12,
          fontWeight: '500',
          lineHeight: 20,
          flex: 3,
        }}>
        Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam
        nonumym
      </TextFormatted>
      <Switch style={{flex: 1}} value={toggle} onValueChange={setToggle} />
    </View>
  </View>
);
export default Allownotifications;

const styles = StyleSheet.create({});
