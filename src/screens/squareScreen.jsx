import react, {useState} from "react";
import { View,Text,Button } from "react-native";
import ColorCounter from "../components/ColorCounter";
const COLOR_INC = 15;
const COLOR_DEC = 10;
const SquareScreen = ()=>{
    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);
    console.log(red);
    return (
        <View>
            <ColorCounter onIncrease={()=> setRed(red + COLOR_INC)} onDecrease={()=>setRed(red-COLOR_DEC)} color={"Red"}/>
            <ColorCounter onIncrease={()=> setGreen(green + COLOR_INC)} onDecrease={()=>setGreen(green-COLOR_DEC)} color={"Green"}/>
            <ColorCounter onIncrease={()=> setBlue(blue + COLOR_INC)} onDecrease={()=>setBlue(blue-COLOR_DEC)} color={"Blue"}/>
            <View style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    )
}

export default SquareScreen