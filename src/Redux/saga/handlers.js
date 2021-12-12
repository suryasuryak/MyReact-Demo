import axios from 'axios'
import { call, put } from 'redux-saga/effects'


export function* loginHandler(action) {
  try {
    let result = yield call(axios.post, "http://localhost:8000/users/signin", action.data)
    console.log(result.data)

    localStorage.setItem("username", result.data.username)
    localStorage.setItem("usertype", result.data.usertype)
    localStorage.setItem("token", result.data.token)

    yield put({
      type: "LOGIN_SUCCESS", data:
      {
        username: result.data.username,
        usertype: result.data.usertype,
        token: result.data.token
      }
    })
  }
  catch (e) {
    yield put({ type: "LOGIN_FAILURE" })
  }

}

export function* employeeHandler() {
  try {
    // console.log(action.data)
    var temp = localStorage.getItem('username')
    const request = { username: temp };

    // let result = yield call(axios.post, "http://localhost:8000/api/employees", action.data)
    // console.log(result.data)

    // yield put({
    //   type: "EMPLOYEE_SUCCESS", data:
    //   {
    //     empList: result.data,
    //   }
    // })
    const result=yield call(axios.post,"http://localhost:8000/api/employeeswithskill", request)

    // const result=yield call(axios.get,"https://api.quotable.io/random")

    yield put({
         type:"EMPLOYEE_SUCCESS",
        //  data:{response: result.data, message: result.data.content,by:result.data.by}
         data:{response: result.data}
     })
  }
  catch (e) {
    yield put({ type: "EMPLOYEE_FAILURE" })
  }

}

