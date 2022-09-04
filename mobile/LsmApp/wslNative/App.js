import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native-stack";
import Navigation from "./src/navigation/Navigation";

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
