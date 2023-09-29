import { useState } from "react";
import axios from "axios";
function StudentCreate(){
    const [studentID, setStudentID] = useState("");
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    async function createNewPerson(event)
    {
        // alert("Value: " + studentID + "-" + fullName + "-" + address);
        event.preventDefault();
        try {
            await axios.post("student", {
                studentID: studentID,
                fullName: fullName,
                address: address
            });
            alert("Create successful student!");
        } catch(err) {
            alert(err);
        }
    }
    return ( 
        <div>
            <div>
                <h3 id="tableLabel" className="w3-left">Student List</h3>
                <button type="button" className="btn w3-green w3-right w3-card-4" data-bs-toggle="modal" data-bs-target="#myModal">
                    <i class="fa fa-plus w3-round-large"></i> Add
                </button>
                <br></br>
            </div>
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">Create a new Student</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <input name='studentID' value={studentID} onChange={(event) => { setStudentID(event.target.value); }} type='text' className='form-control' placeholder='Enter StudentID'></input><br></br>
                                <input name='fullName' value={fullName} onChange={(event) => { setFullName(event.target.value); }} type='text' className='form-control' placeholder='Enter Full name'></input><br></br>
                                <input name='address' value={address} onChange={(event) => { setAddress(event.target.value); }} type='text' className='form-control' placeholder='Enter Address'></input><br></br>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={createNewPerson} class="btn btn-success">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StudentCreate;