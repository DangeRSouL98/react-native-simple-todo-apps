import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    UserID:0,
    LoginName:'',
    LoginCondition:false
}

const LoginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        loginUser:(s,payload)=>{
            s.LoginName = payload.payload.name
            s.UserID = payload.payload.id
        },
        setError:(s,payload)=>{
            s.LoginCondition = payload.payload
        }
    }
})

export const {loginUser,setError} = LoginSlice.actions
export const LoginName = (s) => s
export default LoginSlice.reducer