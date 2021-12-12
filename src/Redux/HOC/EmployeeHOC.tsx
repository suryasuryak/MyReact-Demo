import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import WFMTableView from '../ReduxComponents/WFMTableView';

export default connect(
    (state:any)=>{
        return {
            response: state.employeeData,
            // message: state.employeeData.message,
            // by: state.employeeData.by
        }
    }, 
    null
    // (dispatch)=>{
    //     return bindActionCreators({ 
    //         callEmployee:(user:any)=>{
    //             return {type: "EMPLOYEE_ACTION",data:user}
    //         }
    //     },dispatch)
    // }
)(WFMTableView)