import react from "react";
import { StyleSheet,View,Text,Image } from "react-native";

const ImageDetail = ({title,image_src,imageScore})=> {
    return (
        <View>
            <Image source={image_src}/>
            <Text>{title}</Text>
            <Text>Image Score - {imageScore}</Text>
        </View>
    )
}
export default ImageDetail