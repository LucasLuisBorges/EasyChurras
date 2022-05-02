import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppTabRoutes } from './src/routes/app.tab.routes';

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
import { BarbecueSelectedStep1 } from './src/screens/BarbecueSelectedStep1';
import { NewAddress } from './src/screens/NewAddress';

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
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <NewAddress />
      </NavigationContainer>
    </ThemeProvider>
  )
}