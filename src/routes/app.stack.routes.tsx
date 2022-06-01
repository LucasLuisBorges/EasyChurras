import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { MainMenu } from "../screens/MainMenu";
import { MyAccount } from "../screens/MyAccount";
import { BarbecueComplete } from "../screens/BarbecueComplete";
import { NewAddress } from "../screens/NewAddress";
import { NewBarbecue } from "../screens/NewBarbecue";
import { Scheduled } from "../screens/Scheduled";
import { BarbecueSelected } from "../screens/BarbecueSelected";

export type AppRoutes = {
  Home: undefined;
  MainMenu: undefined;
  MyAccount: undefined;
  BarbecueComplete: undefined;
  NewAddress: undefined;
  NewBarbecue: undefined;
  Scheduled: undefined;
  BarbecueSelected: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutes {}
  }
}

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Start">
      <Screen name="Start" component={Home} />
      <Screen name="MainMenu" component={MainMenu} />
      <Screen name="MyAccount" component={MyAccount} />
      <Screen name="BarbecueComplete" component={BarbecueComplete} />
      <Screen name="NewAddress" component={NewAddress} />
      <Screen name="NewBarbecue" component={NewBarbecue} />
      <Screen name="Scheduled" component={Scheduled} />
      <Screen name="BarbecueSelected" component={BarbecueSelected} />
    </Navigator>
  );
}
