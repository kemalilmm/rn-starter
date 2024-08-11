import React from "react";
import { StyleSheet,View,Text,FlatList } from "react-native";
const ListScreen = ()=>{
    const friends = [
        {name:'Friends #1',age:21,key:'1'},
        {name:'Friends #2',age:22,key:'2'},
        {name:'Friends #3',age:23,key:'3'},
        {name:'Friends #4',age:24,key:'4'},
        {name:'Friends #5',age:25,key:'5'},
        {name:'Friends #6',age:26,key:'6'},
        {name:'Friends #7',age:27,key:'7'},
        {name:'Friends #8',age:28,key:'8'},
        {name:'Friends #9',age:29,key:'9'},
    ]
    return(
        <FlatList
        keyExtractor={(friend)=>friend.name}
        data={friends}
        renderItem={({item})=>{
            return <Text style={style.textlistStyle}>{item.name} - Age {item.age}</Text>
        }}
        />
    )
};

const style=StyleSheet.create({
    textlistStyle:{
        marginVertical:10,
        padding:10,
    }
})
export default ListScreen