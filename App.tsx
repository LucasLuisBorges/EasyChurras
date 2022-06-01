import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_300Light
} from '@expo-google-fonts/montserrat'

import AppLoading from 'expo-app-loading';
import theme from './src/styles/theme';
import { ThemeProvider } from 'styled-components'
import { NewAddress } from './src/screens/NewAddress';
import { Scheduled } from './src/screens/Scheduled';
import { Home } from './src/screens/Home';
import { AppTabRoutes } from './src/routes/app.tab.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_300Light
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider 
      theme={theme}
    >
      <NavigationContainer>
        <AppTabRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}