import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostDetails = () => {
  return (
    <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={{ uri: "https://source.unsplash.com/random" }}
        style={{ width: 300, height: 600 }}
      />
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </TouchableOpacity>
  );
};

export default PostDetails;
