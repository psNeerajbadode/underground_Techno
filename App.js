import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import store, {persistor} from './src/redux/Store';
import {Provider} from 'react-redux';
import Authnavi from './src/screen/navigationscreen/Authnavigation/Authnavi';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false, orientation: 'portrait'}}>
            <Stack.Screen component={Authnavi} name="Authnavi" />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast
          visibilityTime={1500}
          autoHide={true}
          config={{
            success: props => (
              <View
                style={{
                  ...styles.toastContainer,
                }}>
                <Text
                  style={{
                    ...styles.toasttext,
                  }}>
                  {props.text1}
                </Text>
              </View>
            ),
            error: props => (
              <View
                style={{
                  ...styles.toastContainer,
                }}>
                <Text
                  style={{
                    ...styles.toasttext,
                  }}>
                  {props.text1}
                </Text>
              </View>
            ),
          }}
        />
        {/* </MenuProvider> */}
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: '#fff',
    width: '90%',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  toasttext: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 12,
    textTransform: 'capitalize',
  },
});
