import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  function ComponentRedirect(){
    navigation.navigate('Components')
  }
  function listRedirect(){
    navigation.navigate('ListScreens')
  }
  function ImageScreenRedirect(){
    navigation.navigate('ImageScreens')
  }
  return( 
    <View>
      <Text style={styles.text}>Hi There !</Text>
      <Button title="Go To Components Demo"
      onPress={ComponentRedirect}
      />
      <Button title="Go To List Demo"
      onPress={listRedirect}
      />
      <Button title="Go To List ImageScreen"
      onPress={ImageScreenRedirect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;