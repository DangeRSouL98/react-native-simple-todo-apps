import React, { useEffect, useState } from "react"
import { SafeAreaView, View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {loginUser,LoginName,setError} from '../redux/LoginSlice'
import axios from "axios";

const Login = ({navigation}) => {
    const dispatch = useDispatch()
    const Login = useSelector(LoginName)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [displayError, setDisplayError] = useState(false)
    
    const handleLogin = () => {
          axios.get('https://jsonplaceholder.typicode.com/users').then(
            (res)=>{
              const user = res.data.find(x =>x.username === username)
              if ( user && username === password){
                dispatch(loginUser({id:user.id,name:user.username}))
                dispatch(setError(false))
                setUsername('')
                setPassword('')
                navigation.navigate('TaskList')
              }
              else{
                dispatch(setError(true))
              }
            }
          )
    }
    useEffect(() => {
      dispatch(setError(false))
    }, [])

    return(
        <SafeAreaView style={style.background_c}>
            <View>
                <Text style={style.text_style}>To Do App</Text>
            </View>
            <View style={[style.bottom_login,Login.Login.LoginCondition && style.bottom_login_true]}>
                <Text>Username</Text>
                <TextInput style={style.inputColor} value={username} onChangeText={setUsername}/>
                <Text>Password</Text>
                <TextInput style={style.inputColor} value={password} onChangeText={setPassword} secureTextEntry={true}/>
                <TouchableOpacity style={style.btnLogin} onPress={
                  // ()=>navigation.navigate('TaskList')
                  handleLogin
                }>
                    <Text style={style.btnLoginText}>Login</Text>
                </TouchableOpacity>
                {Login.Login.LoginCondition && <Text style={style.wrongText}>Wrong Password</Text>}
                
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    background_c:{
      backgroundColor:"#F0E5CF",
      flex:1
    },
    text_style:{
      textAlign:"center",
      marginTop:"10%",
      fontSize:20
    },
    bottom_login:{
      position:"absolute",
      bottom:150,
      width:"85%",
      marginHorizontal:20
    },
    bottom_login_true:{
      bottom:100
    },
    btnLogin:{
      backgroundColor:"#4B6587",
      width:180,
      height:50,
      alignSelf:"center",
      borderRadius:50,
      textAlignVertical:"center"
    },
    btnLoginText:{
      color:"white",
      textAlign:"center",
      flex:1,
      textAlignVertical:"center",
      fontSize:20
    },
    inputColor:{
      backgroundColor:"white",
      flex:1,
      marginBottom:30,
      borderRadius:10
    },
    wrongText:{
      textAlign:'center',
      marginTop:80,
      color:'red'
    }
  })

  export default Login