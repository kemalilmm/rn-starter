import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
        <Text style={styles.TextStyleOne}>Box Screen 1</Text>
        <Text style={styles.TextStyleTwo}>Box Screen 1</Text>
        <Text style={styles.TextStyleThree}>Box Screen 1</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:5,
        bordercolor:'black',
        margin:10,
        alignItems:'stretch',
        flexDirection:'column',
        height:200,
    },
    TextStyleOne:{
        textAlign:'center',
        color:'red',
        borderWidth:2,
        borderColor:'blue',
        alignSelf:'stretch'
    },
    TextStyleTwo:{
        textAlign:'center',
        color:'red',
        borderWidth:2,
        borderColor:'blue',
        
    },
    TextStyleThree:{
        textAlign:'center',
        color:'red',
        borderWidth:2,
        borderColor:'blue',
        
    }
})
export default BoxScreen
