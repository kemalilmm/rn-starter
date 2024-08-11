import react from "react";
import { StyleSheet,View,Text,Image } from "react-native";
import ImageDetail from "../components/imageDetail";

 const ImageScreen = ()=>{
    return(
        <View> 
            <ImageDetail imageScore="91" title="Forest" image_src={require('../../assets/forest.jpg')}/>
            <ImageDetail imageScore="50" title="Beach" image_src={require('../../assets/beach.jpg')}/>
            <ImageDetail imageScore="23" title="Mountain" image_src={require('../../assets/mountain.jpg')}/>
        </View>
    )
}
export default ImageScreen