import react,{useState} from "react";

import { View,TextInput, Text, StyleSheet } from "react-native";

const TextScreen = () =>{
    const [password,setPassword] = useState('')
    return(
        <View>
            <Text>Enter Password</Text>
            <TextInput style={styles.textinput} autoCapitalize="none" autoCorrect={false} value={password} onChangeText={newVal => setPassword(newVal)}/>
            {
                (password.length>5) ? <Text>Password Matched</Text> : <Text>Password must be longer than 5 characters</Text>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    textinput :{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
})
export default TextScreen;