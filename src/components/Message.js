import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Message({navigation}) {
  const [name, setName] = useState('');
  const [getName, setGetName] = useState('');
  const [done, setDone] = useState('true');

  storeData = async () => {
    console.log(name);
    try {
      setDone(false);
      await AsyncStorage.setItem('name', name);
    } catch (error) {
      console.log(error);
    }
    setDone(true);
  };

  retrieveData = async () => {
    try {
      setDone(false);
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        setGetName(value);
      }
    } catch (error) {
      console.log(error);
    }
    setDone(true);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Messages</Text>
      <TextInput
        onChangeText={e => {
          setName(e);
        }}
      />
      <Text>{done ? 'done' : 'not done'}</Text>
      <Button
        title="store data"
        onPress={() => {
          storeData();
        }}
      />
      <TextInput value={getName} />
      <Button
        title="get data"
        onPress={() => {
          retrieveData();
        }}
      />
      <Button
        title="To Feed"
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Feed',
          })
        }
      />
    </View>
  );
}

export default Message;
