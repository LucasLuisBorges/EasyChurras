import React from 'react';

import {
  useFonts,
} from ''
import {
  
} from ''

import AppLoading from 'expo-app-loading';
import theme from './src/styles/theme';
import { ThemeProvider } from 'styled-components'
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}