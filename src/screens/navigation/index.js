import React from 'react';
import { Text, View } from 'react-native';
import Style from '../style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../home';
import sreen2 from '../sreen2';
import Login from '../Login';

const Stack = createStackNavigator();

export const SCREEN_NAME = {
  LOGIN: 'Login',
  HOME: 'home',
  ABOUT_ME: 'sreen2',
};

/**នេះជា​ អេក្រង់នីមួយៗ */

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
        backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
      }}>
        <Stack.Screen name={SCREEN_NAME.HOME} component={home} />
        <Stack.Screen name={SCREEN_NAME.ABOUT_ME} component={sreen2} />
        <Stack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};