import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";

const AccountStack = createNativeStackNavigator();

export default function AccountNavigation(props) {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Mi Cuenta",
        }}
      />
    </AccountStack.Navigator>
  );
}
