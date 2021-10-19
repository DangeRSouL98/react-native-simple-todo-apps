import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from './TodoSlice'
import LoginReducer from './LoginSlice'

export const store = configureStore({
    reducer:{
        Todo:TodoReducer,
        Login:LoginReducer
    }
})