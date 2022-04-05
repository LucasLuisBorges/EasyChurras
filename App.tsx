import React from 'react';

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

import { Home } from './src/screens/Home';
import { MainMenu } from './src/screens/MainMenu';
import { NewBarbecue } from './src/screens/NewBarbecue';
import { Scheduled } from './src/screens/Scheduled';
import { BarbecueComplete } from './src/screens/BarbecueComplete';

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
      <BarbecueComplete />
    </ThemeProvider>
  )
}