import react, {useReducer} from "react";
import { View,Text,Button } from "react-native";
import ColorCounter from "../components/ColorCounter";
const COLOR_INC = 15;
const reducer = (state, action) => {
    switch(action.type){
        case 'change_red':
            return (state.red + action.payload > 255 || state.red+action.payload < 0) ? state : {...state, red:state.red + action.payload}
        case 'change_green':
            return (state.green + action.payload > 255 || state.green+action.payload < 0) ? state : {...state, green:state.green + action.payload}
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue+action.payload < 0) ? state : {...state, blue:state.blue + action.payload}
        default: return
    }

}
const SquareScreen = ()=>{
   
    
    const [state,dispatchReducer] = useReducer(reducer,{red:0,green:0,blue:0});
    const {red,green,blue}=state;
    return (
        <View>
            <ColorCounter onIncrease={()=>dispatchReducer({type:'change_red',payload:COLOR_INC})} onDecrease={()=>dispatchReducer({type:'change_red',payload:-1*COLOR_INC})} color={"Red"}/>
            <ColorCounter onIncrease={()=>dispatchReducer({type:'change_green',payload:COLOR_INC})} onDecrease={()=>dispatchReducer({type:'change_red',payload:-1*COLOR_INC})} color={"Green"}/>
            <ColorCounter onIncrease={()=>dispatchReducer({type:'change_blue',payload:COLOR_INC})} onDecrease={()=>dispatchReducer({type:'change_blue',payload:-1*COLOR_INC})} color={"Blue"}/>
            <View style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    )
}

export default SquareScreen