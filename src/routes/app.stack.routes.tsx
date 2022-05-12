import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { MainMenu } from '../screens/MainMenu';
import { MyAcount } from '../screens/MyAcount';
import { BarbecueComplete } from '../screens/BarbecueComplete';
import { NewAddress } from '../screens/NewAddress';
import { NewBarbecue } from '../screens/NewBarbecue';
import { Scheduled } from '../screens/Scheduled';
import { BarbecueSelectedStep1 } from '../screens/BarbecueSelectedStep1';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="MyAcount" component={MyAcount} />
            <Stack.Screen name="BarbecueComplete" component={BarbecueComplete} />
            <Stack.Screen name="BarbecueSelectedStep1" component={BarbecueSelectedStep1} />
            <Stack.Screen name="NewAddress" component={NewAddress} />
            <Stack.Screen name="NewBarbecue" component={NewBarbecue} />
            <Stack.Screen name="Scheduled" component={Scheduled} />
        </Stack.Navigator>
     </NavigationContainer>
  );
}

export {MyStack}
