export const loginReducer=(state={username:"NA",token:"NA",usertype:"NA",message:""},action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log(action.data)
            return {...action.data,message:""};
        case "LOGIN_FAILURE":
            console.log(action)
            return {...state,message:"Login Credentials incorrect"}
        default:
            return state
    }
}

export const employeeReducer=(state={response: []},action)=>{
    switch(action.type){
       case "EMPLOYEE_SUCCESS":
            console.log(action.data)
            return {
                response: action.data,
                // message: action.data.message,
                // by: action.data.by
            }
            // return {empList: action.data};
        case "EMPLOYEE_FAILURE":
            console.log(action)
            return {...state,message:"No data available for the employee"}
        default:
            return state
    }
}