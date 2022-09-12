import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
        }}
      />
    </Tab.Navigator>
  );
}
