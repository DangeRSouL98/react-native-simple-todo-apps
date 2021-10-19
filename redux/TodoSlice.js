import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    TodoList:[]
}

export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        getTodo:(s)=>{
            s.TodoList.push('hoi')
        }
    }
})

export const {getTodo} = TodoSlice.actions
export const TodoList = (s)=>s
export default TodoSlice.reducer