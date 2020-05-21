import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import RooTNavigator from "./navigation";

//
const App = () => <RooTNavigator />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#02011a",
    justifyContent: "center",
  },
});
export default App;
