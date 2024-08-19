import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  function ComponentRedirect() {
    navigation.navigate("Components");
  }
  function listRedirect() {
    navigation.navigate("ListScreens");
  }
  function ImageScreenRedirect() {
    navigation.navigate("ImageScreens");
  }
  function CounterScreenRedirect() {
    navigation.navigate("CounterScreen");
  }
  function ColorScreenRedirect() {
    navigation.navigate("ColorScreen");
  }
  function SquareScreenRedirect(){
    navigation.navigate('Square')
  }
  return (
    <View>
      <Text style={styles.text}>Hi There !</Text>
      <View style={styles.buttonLayout}>
        <Button title="Go To Components Demo" onPress={ComponentRedirect} />
        <Button title="Go To List Demo" onPress={listRedirect} />
        <Button title="Go To List ImageScreen" onPress={ImageScreenRedirect} />
        <Button
          title="Go To List CounterScreen"
          onPress={CounterScreenRedirect}
        />
        <Button
          title="Go To List Color Screen"
          onPress={ColorScreenRedirect}
        />
         <Button
          title="Go To List Square Screen"
          onPress={SquareScreenRedirect}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonLayout: {
    gap: 10, // Adds vertical spacing between buttons
    marginTop: 20, // Adds space between the text and buttons
  }
});

export default HomeScreen;
