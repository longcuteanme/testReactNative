import React from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from './Feed';
import Message from './Message';
import Thunk from './Thunk';

const Tab = createBottomTabNavigator();

function Home({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Messages" component={Message} />
        <Tab.Screen name="Thunk" component={Thunk} options={{tabBarBadge: 3}} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default Home;
