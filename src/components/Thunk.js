import AsyncStorage from '@react-native-async-storage/async-storage';
import {keys} from 'lodash';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../stories/actions/getUser';

export default function Thunk() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    // dispatch(getUser);
    const getKeys = async () => {
      try {
        const keys = await AsyncStorage.getItem('persist:root')
        console.log(keys);
      } catch (e) {
        console.log(e);
      }
    };
    getKeys();
  }, []);

  return (
    <View style={styles.centered}>
      <Text style={styles.contentText}>Thunk</Text>
      <Text>{user.hoTen}</Text>
      {/* <Text>{user.accessToken}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
