import React, { useState, useEffect } from 'react';
function StdDelete({stdID, fName, dc})
{
    const [studentID, setStudentID] = useState("");
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    useEffect(()=> {
        setStudentValue();
    });
    async function setStudentValue() {
        setStudentID(stdID);
        setFullName(fName);
        setAddress(dc);
    }
    return ( 
        <div>
            <div className="modal" id="deleteStudent">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Student</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <label>Student id: {studentID}</label><br></br>
                                <label>Full name: {fullName}</label><br></br>
                                <label>Address: {address}</label><br></br>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StdDelete;