import React,{useReducer} from "react";
import { View,Text,StyleSheet,Button } from "react-native";

const reducer = (state,action) =>{
    switch(action.type){
        case 'increment' :
            return {...state,count:state.count+5}
        case 'decrement' :
            return (state.count-5 < 0)?state:{...state,count:state.count-5}
        default : return;
    }
}
const CounterScreen = () => {
const [state,dispatch] = useReducer(reducer,{count:0});

return (
    <View>
        <Button onPress={()=>dispatch({type:'increment'})} title="Increment"/>
        <Button onPress={()=>dispatch({type:'decrement'})} title="Decrement"/>
        <Text>Current Count : {state.count}</Text>
    </View>
)
}
const styles = StyleSheet.create({

});
export default React.memo(CounterScreen);