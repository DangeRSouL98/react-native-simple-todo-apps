import React from "react";
import { SafeAreaView, View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import Login from "./screen/Login";
import TaskList from "./screen/TaskList";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const App = () => {
  const Stack = createNativeStackNavigator()
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="TaskList" component={TaskList} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App
