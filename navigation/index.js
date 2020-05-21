import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Posts from "./Posts";
import Home from "../screens/Home";
import { Text } from "react-native";

const {
  Navigator: TabNavigator,
  Screen: TabScreen,
} = createBottomTabNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <TabNavigator
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "white",
        labelStyle: { fontSize: 25, fontWeight: "bold" },
        style: { backgroundColor: "blue" },
      }}
    >
      <TabScreen name="home" component={Home} />
      <TabScreen name="posts" component={Posts} />
    </TabNavigator>
  </NavigationContainer>
);

export default RootNavigator;
