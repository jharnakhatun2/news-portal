import auth from "../firebase/firebase.init";
import { Login_Fail, Login_Start, Login_Success, Logout_Fail, Logout_Start, Logout_Success, Register_Start, Register_Success, Set_User } from "./actionTypes"
import { createUserWithEmailAndPassword } from "firebase/auth";


const registerStart = () =>{
    return{
        type : Register_Start
    }
}
const registerSuccess = (user) =>{
    return{
        type : Register_Success,
        payload: user
    }
}
const registerFail = (error) =>{
    return{
        type : Register_Success,
        payload: error
    }
}
const loginStart = () =>{
    type : Login_Start
}
const loginSuccess = (user) =>{
    return{
        type : Login_Success,
        payload: user
    }
}
const loginFail = (error) =>{
    return{
        type : Login_Fail,
        payload: error
    }
}
const logoutStart = () =>{
    type : Logout_Start
}
const logoutSuccess = (user) =>{
    return{
        type : Logout_Success,
        payload: user
    }
}
const logoutFail = (error) =>{
    return{
        type : Logout_Fail,
        payload: error
    }
}
export const setUser = (user) => {
    return{
        type: Set_User,
        payload: user
    }
}

//register firebase action
export const registerInitiate = (email, password) =>{
    return (dispatch) =>{
        dispatch(registerStart());
        createUserWithEmailAndPassword(auth,email,password)
        .then(({user})=> {
            console.log(user)
            user.displayName({ displayName})
            dispatch(registerSuccess(user))
        })
        .catch(error => {
            dispatch(registerFail(error.message))
        })
    }
}

