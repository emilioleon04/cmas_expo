import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

// Importamos todas las pantallas desde el index
import {
  LoginScreen,
  BalanceScreen,
  SelectCardScreen,
  CVVScreen,
  LoadingScreen,
  PaymentSuccessScreen,
} from '../screens';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Balance" component={BalanceScreen} />
        <Stack.Screen name="SelectCard" component={SelectCardScreen} />
        <Stack.Screen name="CVV" component={CVVScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};