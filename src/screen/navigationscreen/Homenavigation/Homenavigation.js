import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {theme} from '../../../utils/Constants';

import TextFormatted from '../../../component/TextFormatted';
import Homescreen from '../../homescreen/Homescreen';
import Gigs from '../../homescreen/Gigs';
import Party from '../../homescreen/Party';
import Setting from '../../homescreen/Setting';
import Profile from '../../homescreen/Profile';
import {useSelector} from 'react-redux';
import Partyv from '../../Vandorscreens/Partyv';
import Jobs from '../../Vandorscreens/Jobs';
import Add from '../../Vandorscreens/Add';
import Profilev from '../../Vandorscreens/Profilev';
import Eventv from '../../Vandorscreens/Eventv';

const Tab = createBottomTabNavigator();
const Homenavigation = () => {
  const User = useSelector(state => state.User);
  console.log('User', User.UserRole);
  return (
    <View style={{flex: 1}}>
      {User.UserRole == 'Partier' ? (
        <Tab.Navigator
          initialRouteName="Homescreen"
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {display: 'none'},
            tabBarStyle: {height: 75},
          }}>
          <Tab.Screen
            name="Homescreen"
            component={Homescreen}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Icon/calendar.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}
                  />
                  <TextFormatted
                    style={{
                      ...styles.title,
                      color: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}>
                    Calendar
                  </TextFormatted>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Gigs"
            component={Gigs}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Icon/Gigs.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}
                  />
                  <TextFormatted
                    style={{
                      ...styles.title,
                      color: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}>
                    Gigs
                  </TextFormatted>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Party"
            component={Party}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Icon/Party.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}
                  />
                  <TextFormatted
                    style={{
                      ...styles.title,
                      color: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}>
                    Party
                  </TextFormatted>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={Setting}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Icon/seeting.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}
                  />
                  <TextFormatted
                    style={{
                      ...styles.title,
                      color: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}>
                    Setting
                  </TextFormatted>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Icon/Profile.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}
                  />
                  <TextFormatted
                    style={{
                      ...styles.title,
                      color: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}>
                    Profile
                  </TextFormatted>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName="Partyv"
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {display: 'none'},
            tabBarStyle: {height: 75},
          }}>
          <Tab.Screen
            name="Partyv"
            component={Partyv}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Icon/Party.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}
                  />
                  <TextFormatted
                    style={{
                      ...styles.title,
                      color: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}>
                    Party
                  </TextFormatted>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Jobs"
            component={Jobs}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Icon/vJobs.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}
                  />
                  <TextFormatted
                    style={{
                      ...styles.title,
                      color: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}>
                    Jobs
                  </TextFormatted>
                </View>
              ),
            }}
          />
          {/* <Tab.Screen
            name="Add"
            component={Add}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Icon/vadd.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}
                  />
                  <TextFormatted
                    style={{
                      ...styles.title,
                      color: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}>
                    Add
                  </TextFormatted>
                </View>
              ),
            }}
          /> */}
          <Tab.Screen
            name="Eventv"
            component={Eventv}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Icon/vEvent.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}
                  />
                  <TextFormatted
                    style={{
                      ...styles.title,
                      color: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}>
                    Event
                  </TextFormatted>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Profilev"
            component={Profilev}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <View style={{alignItems: 'center'}}>
                  <Image
                    resizeMode="contain"
                    source={require('../../../assets/Icon/Profile.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}
                  />
                  <TextFormatted
                    style={{
                      ...styles.title,
                      color: focused ? theme.colors.maincolor : '#b3b3b3',
                    }}>
                    Profile
                  </TextFormatted>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </View>
  );
};

export default Homenavigation;

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 8,
  },
});
