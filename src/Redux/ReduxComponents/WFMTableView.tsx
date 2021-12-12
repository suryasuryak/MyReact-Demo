import { Button, Modal } from "react-bootstrap";
import { WfmPopupContent } from "../../WFM/SoftLockPopup";
import JsonData from '../../DataFactory/sample.json';
import { useEffect, useState } from "react";
import "./WFMTableView.css"
const WFMTableView = ({response}:any) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() =>{

    }, [])
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr>
                    <td>{info.employee_id}</td>
                    <td>{info.name}</td>
                    <td>
                    <div className="d-grid gap-2 d-md-block ">
                    {info.profiles?.map((x:string)=>
                    <button className="btn btn-primary Button-style mx-2 shadow-none border-style: none;"  type="button">{x}</button>
                    )}
                    </div>
                    
                    </td>
                    <td>{info.experience}</td>
                    <td>{info.manager}</td>
                    <td>
                    <button type="button" className="btn btn-primary " onClick={() => { setShow(true)}}>Request Lock</button>
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
                        <th>Name</th>
                        <th>Skills</th>
                        <th>Experience</th>
                        <th>Manager</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Soft lock Request Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <WfmPopupContent/>
                    {/* <PopupContent /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Send Request
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default WFMTableView;