import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from "styled-components";
import { Platform } from "react-native";

import { Home } from '../../src/screens/Home';
import { Scheduled } from '../../src/screens/Scheduled';
import { MyAccount } from '../screens/MyAccount';

import HomeSvg from '../assets/home.svg';
import PeopleSvg from '../assets/people.svg';
import LogoSvg from '../assets/logo.svg';

import { AppStackRoutes } from "./app.stack.routes";

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
        component={AppStackRoutes}
        options={{
          tabBarIcon: (({ color }) => (
            <HomeSvg width={30} height={30} fill={color} />
          ))
        }}
      />
      <Screen
        name="BarbecueList"
        component={Scheduled}
        options={{
          tabBarIcon: (({ color }) => (
            <LogoSvg width={36} height={36} fill={color} />
          ))
        }}
      />
      <Screen
        name="Profile"
        component={MyAccount}
        options={{
          tabBarIcon: (({ color }) => (
            <PeopleSvg width={30} height={30} fill={color} />
          ))
        }}
      />
    </Navigator>
  )
}