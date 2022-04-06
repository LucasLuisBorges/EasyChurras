import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from "styled-components";
import { Platform } from "react-native";

import { Home } from '../../src/screens/Home';
import { MainMenu } from '../../src/screens/MainMenu';
import { NewBarbecue } from '../../src/screens/NewBarbecue';
import { Scheduled } from '../../src/screens/Scheduled';
import { BarbecueComplete } from '../../src/screens/BarbecueComplete';
import { MyAcount } from '../../src/screens/MyAcount';

import HomeSvg from '../assets/home.svg';
import PeopleSvg from '../assets/people.svg';
import SpeedSvg from '../assets/speed.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme()
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 78,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: theme.colors.background_primary
        },
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.textOpacity
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          ))
        }}
      />
      <Screen
        name="BarbecueList"
        component={Scheduled}
        options={{
          tabBarIcon: (({ color }) => (
            <SpeedSvg width={24} height={24} fill={color} />
          ))
        }}
      />
      <Screen
        name="Profile"
        component={MyAcount}
        options={{
          tabBarIcon: (({ color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          ))
        }}
      />
    </Navigator>
  )
}