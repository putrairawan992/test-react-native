import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Coupon from '../screens/Coupon';
import Notification from '../screens/Notification';
import {RootStackParamList} from './interface';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Coupon"
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen component={Coupon} name="Coupon" />
      <Stack.Screen component={Notification} name="Notification" />
    </Stack.Navigator>
  );
}

export default function Router() {
  return <StackNavigator />;
}
