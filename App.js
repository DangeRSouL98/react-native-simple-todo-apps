import React from "react";
import { SafeAreaView, View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import Login from "./screen/Login";
import TaskList from "./screen/TaskList";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Provider } from "react-redux";
import {store} from "./redux/store"

const App = () => {
  const Stack = createNativeStackNavigator()
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="TaskList" component={TaskList} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


export default App
