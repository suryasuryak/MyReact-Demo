import React, { useEffect, useState } from "react";
import { Alert, Button, Dropdown, DropdownButton, Modal, Table } from "react-bootstrap";

export const PopupContent = ({myItem}:{myItem: any})  => {
    const [name, setName] = useState("Test");
    const [item, setItem] = useState("Select");

    const state = {
        teams: [],
        selectedTeam: "",
        validationError: ""
      };

    return (
        <div className="vstack gap-3">
            <div >Employee: {myItem.employee_id}</div>
            <div >Requestee: {myItem.name}</div>
            <div >Employee Manager: {myItem.wfm_manager}</div>
            <div >Request Description: I need developer</div>
            <div className="hstack gap-3">
                Status: 
                <div className="dropdown">
                    <select value={item} onChange={e => setItem(e.target.value)}>
                        <option value="Accept">Accept</option>
                        <option value="Decline">Decline</option>
                    </select>
                </div>
            </div>
        </div>
    )
}


export const WfmPopupContent = () => {
    const [name, setName] = useState("Test");
    const [item, setItem] = useState("Select");

    return (
        <div className="vstack gap-3">
            <div >Please confirm the lock request for 1000</div>
            <div >Request message(message must be atleast 0 char long)</div>
            <div className="form-group">
  <textarea className="form-control" ></textarea>
</div>
        </div>  
    )
}


