import {createSlice} from '@reduxjs/toolkit'

const initialState={
    TodoList:[]
}

export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        getTodo:(s,payload)=>{
            s.TodoList = payload.payload
            
        }
    }
})

export const {getTodo} = TodoSlice.actions
export const TodoList = (s)=>s
export default TodoSlice.reducer