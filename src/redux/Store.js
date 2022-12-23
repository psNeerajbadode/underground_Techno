import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import Rootreducer from './reducer/Rootreducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, Rootreducer);

let store = createStore(persistedReducer);

export let persistor = persistStore(store);
export default store;
