import react from "react";
import { View,Text,Button } from "react-native";
import ColorCounter from "../components/ColorCounter";
const SquareScreen = ()=>{
    return (
        <View>
            <ColorCounter color={"Red"}/>
            <ColorCounter color={"Green"}/>
            <ColorCounter color={"Blue"}/>
        </View>
    )
}

export default SquareScreen