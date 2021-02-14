import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MovieDetailScreen from '../ui/screen/main/global/MovieDetailScreen';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={BottomTab}></Stack.Screen>
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStack;
