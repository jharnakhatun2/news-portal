import { Login_Fail, Login_Start, Login_Success, Logout_Fail, Logout_Start, Logout_Success, Register_Fail, Register_Start, Register_Success } from "./actionTypes"

const initialState = {
    currentUser: null,
    isLoading: false,
    error: null
}

const userReducer = (state=initialState, action) =>{
    switch(action.type){

        case Register_Start:
        case Login_Start:
        case Logout_Start:
            return{
                ...state,
                isLoading: true
            }

        case Register_Success:
        case Login_Success:
            return{
                ...state,
                currentUser: action.payload,
                isLoading: false,
            }

         case Logout_Success:
            return{
                ...state,
                currentUser: null,
                isLoading: false,
            }

        case Register_Fail:
        case Login_Fail:
        case Logout_Fail:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state ;
    }
}
export default userReducer;