import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsList from "../screens/list";
import PostsHome from "../screens/postsHome";
import PostDetails from "../screens/details";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

const Posts = () => {
  return (
    <StackNavigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTitleAlign: "center",
        headerTintColor: "orange",
      }}
    >
      <StackScreen name="postsHome" component={PostsHome} />
      <StackScreen
        name="list"
        component={PostsList}
        options={({ navigation }) => ({
          headerLeft: () => {
            return (
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <MaterialCommunityIcons
                  name="backburger"
                  size={30}
                  color="white"
                />
                <Text
                  style={{ fontSize: 30, color: "white" }}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  Posts home
                </Text>
              </View>
            );
          },
        })}
      />
      <StackScreen
        name="details"
        component={PostDetails}
        options={({ navigation }) => ({
          headerLeft: () => {
            return (
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <MaterialCommunityIcons
                  name="backburger"
                  size={30}
                  color="white"
                />
                <Text
                  style={{ fontSize: 30, color: "white" }}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  Posts
                </Text>
              </View>
            );
          },
        })}
      />
    </StackNavigator>
  );
};

export default Posts;
