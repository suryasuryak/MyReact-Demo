import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PopupContent, WfmPopupContent } from "../WFM/SoftLockPopup";
import JsonData from '../DataFactory/sample.json';
import axios from "axios";

const ManagerHome=()=>{
    const [name, setName] = useState("");

    useEffect(() => {
        var temp = localStorage.getItem('username')
        setName(temp ?? "");
    });
    return (
        <div>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {/* <i src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> */}
                    Manager Home
                </a>
                <div className="d-flex div-center">
                    <img src="https://www.vippng.com/png/full/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png" width='25' height='25' alt="" />
                    <label className='label_style'>{name}</label>
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button> */}
                </div>
            </div>
        </nav>

        <ManagerTableView />
    </div>
    )
}

export default ManagerHome


const ManagerTableView = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [myItem, setMyItem] = useState({});
    const [employeeList, setEmployeeList] = useState([]);
    const [modalId, setModalId] = useState(-1);
    const [modalName, setModalName] = useState('');
    
    const requestLock = (managerId: any, managerName: any) => {
        setModalId(managerId);
        setModalName(managerName)
        setShow(true);
    }

    useEffect(()=> {
        const username = localStorage.getItem("username");
        axios.post("http://localhost:8000/api/employeeswithskill",{ 
            username: username 
        })
        .then(function (response) {
            setEmployeeList(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr>
                    <td>{info.employee_id}</td>
                    <td>{info.name}</td>
                    {/* <td></td> */}
                    <td>{info.manager}</td>
                    <td>
                    <button type="button" className="btn btn-primary" onClick={() => { setShow(true); setMyItem(info) }}>View Details</button>
                    </td>
                </tr>
            )
        }
    )
    return (
        <div style={{ padding: "20px" }}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>Requestee</th>
                        {/* <th>Request Date</th> */}
                        <th>Employee Manager</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {employeeList.map((employee, i) => (
                    <tr key={i}>
                    <td>{employee["EmployeeID"]}</td>
                    <td>{employee["Name"]}</td>
                    <td>{employee["Skills"]}</td>
                    <td>{employee["Experience"]}</td>
                    <td>{employee["Manager"]}</td>
                    <td><Button variant="primary" onClick={ ()=> requestLock(employee["EmployeeID"], employee["Manager"]) }>Request Lock</Button></td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Soft lock Request Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PopupContent myItem = {myItem}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}