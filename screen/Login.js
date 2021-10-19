import React from "react"
import { SafeAreaView, View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";

const Login = ({navigation}) => {
    return(
        <SafeAreaView style={style.background_c}>
            <View>
                <Text style={style.text_style}>To Do App</Text>
            </View>
            <View style={style.bottom_login}>
                <Text>Username</Text>
                <TextInput style={style.inputColor}/>
                <Text>Password</Text>
                <TextInput style={style.inputColor}/>
                <TouchableOpacity style={style.btnLogin} onPress={()=>navigation.navigate('TaskList')}>
                    <Text style={style.btnLoginText}>Login</Text>
                </TouchableOpacity>
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
      bottom:0,
      marginBottom:200,
      width:"85%",
      marginHorizontal:20
    },
    btnLogin:{
      backgroundColor:"#4B6587",
      width:180,
      height:30,
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
    }
  })

  export default Login