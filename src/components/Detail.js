import React from 'react';
import {View, Text, Button} from 'react-native';

function Detail({route, navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{route?.params?.text ? route?.params?.text : 'Nothing'}</Text>
      <Button title="To Detail" onPress={() => navigation.push('Detail')} />
      <Button title="To Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="changeParams"
        onPress={() => {
          navigation.setParams({text: 'change'});
        }}
      />
    </View>
  );
}
export default Detail;
