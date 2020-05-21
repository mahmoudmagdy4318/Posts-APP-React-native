import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PostsHome = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          width: 200,
          backgroundColor: "orange",
          color: "white",
          fontSize: 30,
          borderRadius: 20,
          textAlign: "center",
        }}
        onPress={() => {
          navigation.navigate("list");
        }}
      >
        Get Posts
      </Text>
    </View>
  );
};

export default PostsHome;
