import React from "react"
import { SafeAreaView, View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList } from "react-native";

const TaskList = () => {
    const name = 'Excel'
    const TodoList = [
        'Hekko',
        'Hello',
        'Gengs'
    ]
    const renderTodo = ({item}) => {
        return(
            <View>
                <Text>{item}</Text>
            </View>
        )
        
        
    }
    
    return(
        <SafeAreaView style={style.background_c}>
            <View style={style.v_title_center}>
                <Text style={style.title_center}>Hello {name}, This is your to do Lists</Text>
            </View>
            <FlatList 
                data={TodoList}
                renderItem = {renderTodo}
            />
            
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    background_c:{
        backgroundColor:"#F0E5CF",
        flex:1
    },
    title_center:{
        textAlign:"center",
        fontSize:30
    },
    v_title_center:{
        marginTop:50,
        marginHorizontal:30
    }
})

export default TaskList