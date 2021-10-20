import React, { useEffect } from "react"
import { SafeAreaView, View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList,Image } from "react-native";
import {useDispatch,useSelector} from 'react-redux'
import {getTodo,TodoList as Tl} from '../redux/TodoSlice'
import axios from 'axios'
import success from '../assets/success.png'
import failed from '../assets/failed.png'


const TaskList = ({navigation}) => {
    const TodoList = useSelector(Tl)
    const dispatch = useDispatch()
    
    // console.log(TodoList)
    useEffect(() => {
        try {
            axios.get('https://jsonplaceholder.typicode.com/todos').then(
                (result)=>{
                    dispatch(getTodo(result.data))
                }
            )
            
        } catch (error) {
            console.log(error)
        }
       
    }, [])
    const renderTodo = ({item}) => {
        return(
            <TouchableOpacity style={[style.task_bg,style.task_style]} onPress={() => navigation.navigate('DetailTask')}>
                <View style={style.flex_title}>
                    <Text style={style.Task_text_title}>{item.title}</Text>
                </View>
                {/* <View style={style.test_circle}></View> */}
                <Image source={item.completed ? success : failed} style={style.status_symbol}/>
                <Text style={style.Task_text_date}>End Date: </Text>
            </TouchableOpacity>
        )
    }
    
    return(
        <SafeAreaView style={style.background_c}>
            <View style={style.v_title_center}>
                <Text style={style.title_center}>Hello {TodoList.Login.LoginName}, This is your to do Lists</Text>
            </View>
            {/* <TouchableOpacity onPress={()=>{
                dispatch(getTodo('oi'))
                console.log(TodoList)
                }}><Text>Touch Me</Text></TouchableOpacity> */}
            <FlatList 
                data={TodoList.Todo.TodoList.filter(item => item.userId == TodoList.Login.UserID)}
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
        fontSize:25,
        width:500,
        flexWrap:'nowrap'
    },
    Task_text_date:{
        fontSize:18,
        color:'white',
        position:'absolute',
        bottom:20,
        marginLeft:40,
    },
    flex_title:{
        display:'flex',
        flexDirection:'row',
        width:280,
        overflow:'hidden'
    },
    status_symbol:{
        width:40,
        height:40,
        position:"absolute",
        right:15,
        top:15
    }
})

export default TaskList