import { useState, useEffect } from "react";
function StdUpdate({stdID, fName, dc})
{
    const [studentID, setStudentID] = useState(stdID);
    const [fullName, setFullName] = useState(fName);
    const [address, setAddress] = useState(dc);
    const [Loaded, setLoaded] = useState(false);
    useEffect(
        () => {
            if(Loaded === false) {
                setStudentValue();
            }
        }
    );
    async function setStudentValue()
    {
        setStudentID(stdID);
        setFullName(fName);
        setAddress(dc);
        if(studentID === stdID) {
            setLoaded(true);
        }
    }
    async function updateStudent()
    {
        alert(studentID + "-" + fullName + "-" + address);
    }
    return ( 
        <div>
            <div className="modal" id="updateStudent">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Update Student</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <input name='studentID' value={studentID} onChange={(event) => { setStudentID(event.target.value); }} type='text' className='form-control' placeholder='Enter PersonID'></input><br></br>
                                <input name='fullName' value={fullName} onChange={(event) => { setFullName(event.target.value); }} type='text' className='form-control' placeholder='Enter Person Name'></input><br></br>
                                <input name='address' value={address} onChange={(event) => { setAddress(event.target.value); }} type='text' className='form-control' placeholder='Enter Address'></input><br></br>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={updateStudent}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StdUpdate;