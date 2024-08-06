import React from "react";
import { StyleSheet,View,Text,FlatList } from "react-native";
const ListScreen = ()=>{
    const friends = [
        {name:'Friends #1',key:'1'},
        {name:'Friends #2',key:'2'},
        {name:'Friends #3',key:'3'},
        {name:'Friends #4',key:'4'},
        {name:'Friends #5',key:'5'},
        {name:'Friends #6',key:'6'},
        {name:'Friends #7',key:'7'},
        {name:'Friends #8',key:'8'},
        {name:'Friends #9',key:'9'},
    ]
    return(
        <FlatList
        keyExtractor={(friend)=>friend.name}
        data={friends} 
        renderItem={({item})=>{
            return <Text>{item.name}</Text>
        }}
        />
    )
};

const style=StyleSheet.create({

})
export default ListScreen