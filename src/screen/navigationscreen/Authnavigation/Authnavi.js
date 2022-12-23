import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from '../../authscreen/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logintype from '../../authscreen/Logintype';
import Login from '../../authscreen/Login';
import Createaccount from '../../authscreen/Createaccount';
import Forgot from '../../authscreen/Forgot';
import Otpvarify from '../../authscreen/Otpvarify';
import Creatpasscode from '../../authscreen/Creatpasscode';
import Homenavigation from '../Homenavigation/Homenavigation';
import Past from '../../homescreen/Past';
import Calendarscreen from '../../homescreen/Calendarscreen';
import Changeusername from '../../homescreen/Changeusername';
import Sound from '../../homescreen/Sound';
import Changepasscode from '../../homescreen/Changepasscode';
import Termscondition from '../../homescreen/Termscondition';
import Allownotifications from '../../homescreen/Allownotifications';
import Rateapp from '../../homescreen/Rateapp';
import Following from '../../homescreen/Following';
import ContactUs from '../../homescreen/ContactUs';
import EditProfile from '../../homescreen/EditProfile';
import Party from '../../homescreen/Party';
import ApprovedParties from '../../homescreen/ApprovedParties';
import FavoritedParties from '../../homescreen/FavoritedParties';
import Details from '../../homescreen/Details';
import Partycreate from '../../homescreen/Partycreate';
import Eventcreate from '../../homescreen/Eventcreate';
import InviteFriend from '../../homescreen/InviteFriend';
import SearchScreen from '../../homescreen/SearchScreen';
import DMscreen from '../../homescreen/DMscreen';
import Chatscreen from '../../homescreen/Chatscreen';
import Vendorlist from '../../homescreen/Vendorlist';
import NotificationScreen from '../../homescreen/NotificationScreen';
import Approvel from '../../Vandorscreens/Approvel';
const Stack = createNativeStackNavigator();
const Authnavi = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={Splash} name="Splash" />
      <Stack.Screen component={Logintype} name="Logintype" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Createaccount} name="Createaccount" />
      <Stack.Screen component={Forgot} name="Forgot" />
      <Stack.Screen component={Otpvarify} name="Otpvarify" />
      <Stack.Screen component={Creatpasscode} name="Creatpasscode" />
      <Stack.Screen component={Homenavigation} name="Homenavigation" />
      <Stack.Screen component={Calendarscreen} name="Calendarscreen" />
      <Stack.Screen component={Past} name="Past" />
      <Stack.Screen component={Changeusername} name="Changeusername" />
      <Stack.Screen component={Sound} name="Sound" />
      <Stack.Screen component={Changepasscode} name="Changepasscode" />
      <Stack.Screen component={Termscondition} name="Termscondition" />
      <Stack.Screen component={Allownotifications} name="Allownotifications" />
      <Stack.Screen component={Rateapp} name="Rateapp" />
      <Stack.Screen component={Following} name="Following" />
      <Stack.Screen component={ContactUs} name="ContactUs" />
      <Stack.Screen component={EditProfile} name="EditProfile" />
      <Stack.Screen component={ApprovedParties} name="ApprovedParties" />
      <Stack.Screen component={FavoritedParties} name="FavoritedParties" />
      <Stack.Screen component={Details} name="Details" />
      <Stack.Screen component={Partycreate} name="Partycreate" />
      <Stack.Screen component={Eventcreate} name="Eventcreate" />
      <Stack.Screen component={InviteFriend} name="InviteFriend" />
      <Stack.Screen component={SearchScreen} name="SearchScreen" />
      <Stack.Screen component={DMscreen} name="DMscreen" />
      <Stack.Screen component={Chatscreen} name="Chatscreen" />
      <Stack.Screen component={Vendorlist} name="Vendorlist" />
      <Stack.Screen component={NotificationScreen} name="NotificationScreen" />
      <Stack.Screen component={Approvel} name="Approvel" />
    </Stack.Navigator>
  );
};

export default Authnavi;

const styles = StyleSheet.create({});
