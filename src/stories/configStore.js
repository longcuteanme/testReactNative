import {createStore, combineReducers, applyMiddleware} from 'redux';
import countReducer from './reducers/countReducer';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import userReducer from './reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['count', 'user'],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
