import React from "react";
import { View,Text,StyleSheet } from "react-native";

const ComponentsScreen = () => {
    const myname = 'Kemal'
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native !</Text>
            <Text style={styles.textStyleName}>My Name is {myname}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle:{
        fontSize:45
    },
    textStyleName:{
        fontSize:20,
    }
})
export default ComponentsScreen;