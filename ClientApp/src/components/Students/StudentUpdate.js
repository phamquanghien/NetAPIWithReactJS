import { useState, useEffect } from "react";
function StudentUpdate({stdID, fName, dc})
{
    const [studentID, setStudentID] = useState("");
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    useEffect(() => {
        (async () => await setStudentValue())();
    });
    async function setStudentValue()
    {
        setStudentID(stdID);
        setFullName(fName);
        setAddress(dc);
    }
    async function updateStudent()
    {
        alert(studentID + "-" + fullName + "-" + address);
    }
    return ( 
        <div>
            <div class="modal" id="updateStudent">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">Update Student</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <input name='studentID' value={studentID} onChange={(event) => { setStudentID(event.target.value); }} type='text' className='form-control' placeholder='Enter PersonID'></input><br></br>
                                <input name='fullName' value={fullName} onChange={(event) => { setFullName(event.target.value); }} type='text' className='form-control' placeholder='Enter Person Name'></input><br></br>
                                <input name='address' value={address} onChange={(event) => { setAddress(event.target.value); }} type='text' className='form-control' placeholder='Enter Address'></input><br></br>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-success" onClick={updateStudent}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StudentUpdate;