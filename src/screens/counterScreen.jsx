import React,{useState} from "react";
import { View,Text,StyleSheet,Button } from "react-native";
const CounterScreen = () => {
const [counter,setCounter] = useState(0);
// function calculate(act){
//     if(act == 'inc'){
//         setCounter(counter+1)
//     }else{
//         setCounter(counter-1)
//     }
// }
return (
    <View>
        <Button onPress={()=>{
            setCounter(counter+1);
        }} title="Increment"/>
        <Button onPress={()=>{
            setCounter(counter-1);
        }} title="Decrement"/>
        <Text>Current Count : {counter}</Text>
    </View>
)
}
const styles = StyleSheet.create({

});
export default React.memo(CounterScreen);