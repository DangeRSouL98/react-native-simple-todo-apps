import React, { useEffect } from "react"
import { SafeAreaView, View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList } from "react-native";
import {useDispatch,useSelector} from 'react-redux'
import {getTodo,TodoList as Tl} from '../redux/TodoSlice'


const TaskList = () => {
    const name = 'Excel'
    const TodoList = useSelector(Tl)
    const dispatch = useDispatch()
    // console.log(TodoList)
    useEffect(() => {
        dispatch(getTodo())
    }, [])
    const renderTodo = ({item,index}) => {
        return(
            <View style={[style.task_bg,style.task_style]}>
                <View style={style.flex_title}>
                    <Text style={style.Task_text_title}>{item}+{index+1}</Text>
                    <View style={style.test_circle}></View>
                </View>
                <Text style={style.Task_text_date}>End Date: </Text>
            </View>
        )
    }
    
    return(
        <SafeAreaView style={style.background_c}>
            <View style={style.v_title_center}>
                <Text style={style.title_center}>Hello {name}, This is your to do Lists</Text>
            </View>
            <TouchableOpacity onPress={()=>{
                dispatch(getTodo())
                }}><Text>Touch Me</Text></TouchableOpacity>
            <FlatList 
                data={TodoList.Todo.TodoList}
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
    },
    task_bg:{
        backgroundColor:"#4B6587"
    },
    task_style:{
        marginVertical:10,
        marginHorizontal:20,
        height:200,
        borderRadius:30
    },
    Task_text_title:{
        color:"white",
        marginTop:20,
        marginLeft:40,
        fontSize:36
    },
    Task_text_date:{
        fontSize:18,
        color:'white',
        marginTop:60,
        marginLeft:40,
    },
    flex_title:{
        display:'flex',
        flexDirection:'row',
    },
    test_circle:{
        backgroundColor:"white",
        width:40,
        height:40,
        position:"absolute",
        borderRadius:50,
        right:15,
        top:15
    }
})

export default TaskList