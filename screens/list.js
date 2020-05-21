import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error));
  });
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("details");
            }}
          >
            <Text style={{ fontSize: 30, color: "black" }}>{item.title}</Text>
            <Image
              source={{ uri: "https://source.unsplash.com/random" }}
              style={{ width: 400, height: 300 }}
            />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(i) => i.title}
      contentContainerStyle={{
        alignItems: "flex-start",
      }}
    />
  );
};

export default PostsList;
