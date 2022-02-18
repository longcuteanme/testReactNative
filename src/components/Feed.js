import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

const Feed = ({navigation}) => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({
      type: 'increment',
    });
  };

  const decrease = () => {
    dispatch({
      type: 'decrement',
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed</Text>
      <Text>{count?.count}</Text>
      <Button title="+" onPress={increase} />
      <Button title="-" onPress={decrease} />
      <Button
        title="To Messages"
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Messages',
          })
        }
      />
      <Button title="To Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default Feed;
