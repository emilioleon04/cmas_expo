import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppNavigation } from './src/navigation/AppNavigation';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_300Light } from '@expo-google-fonts/poppins';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { ActivityIndicator, View } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
        <ActivityIndicator size="large" color="#005882" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <AppNavigation />
    </>
  );
}