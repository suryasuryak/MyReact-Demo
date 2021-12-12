import {combineReducers,applyMiddleware,createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { loginReducer, employeeReducer } from '../reducers/reducer'
import { rootSaga } from '../saga/root'
import { deciderAction } from '../Action/DeciderAction'

const appData = combineReducers({
    loginData: loginReducer,
    employeeData: employeeReducer,
})

const sagaMiddleware=createSagaMiddleware()
export const store=createStore(appData,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export function invokeAction(action){
    store.dispatch(deciderAction(action))
} 

