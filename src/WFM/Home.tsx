import profile from '../Images/profile.png';
import React, { useState, useEffect } from 'react';
import './Home.css';
import { invokeAction } from "../Redux/store/store";
import EmployeeHOC from '../Redux/HOC/EmployeeHOC';
import WFMTableView from '../Redux/ReduxComponents/WFMTableView';

const WFMHome = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        var temp = localStorage.getItem('username')
        setName(temp ?? "");
        // callEmployee({user: temp})
    });

    return (
            <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {/* <i src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> */}
                        Work Force Management
                    </a>
                    <div className="d-flex div-center">
                        <img src="https://www.vippng.com/png/full/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png" width='25' height='25' alt="" />
                        <label className='label_style'>{name}</label>
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </div>
                </div>
            </nav>
            {/* <button type="button" className="btn btn-primary" onClick={() => {
                // callEmployee(
                //     {   
                //         username: localStorage.getItem('username'), password: ""
                //         // user: localStorage.getItem('username')
                //     }
                //     )
                {invokeAction("Call_WFM_Data")}
            }
            }>Get</button> */}
            <WFMTableView></WFMTableView>
            {/* <EmployeeHOC></EmployeeHOC> */}
        </div>
    )
}

export default WFMHome


const Columnlist = () => {
    const columns = [
        {
            dataField: "employee_id",
            text: "Emp ID"
        },
        {
            dataField: "name",
            text: "Name"
        },
        {
            dataField: "price",
            text: "Skills"
        },
        {
            dataField: "experience",
            text: "Experience"
        },
        {
            dataField: "wfm_manager",
            text: "Manager"
        }
    ];
}


