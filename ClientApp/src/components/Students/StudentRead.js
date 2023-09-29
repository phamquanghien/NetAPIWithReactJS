import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentCreate from './StudentCreate';
import StudentUpdate from './StudentUpdate';
import StudentDelete from './StudentDelete';
function StudentRead()
{
    const [studentID, setStudentID] = useState("");
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [students, setStudents] = useState([]);
    useEffect(() => {
        (async () => await getAllStudent())();
      }, []);
    // async function setStudentNull() {
    //     setStudentID("");
    //     setFullName("");
    //     setAddress("");
    // }
    async function setStudentValue(students) {
        setStudentID(students.studentID);
        setFullName(students.fullName);
        setAddress(students.address);
    }
    async function getAllStudent() {
        const result = await axios.get('student');
        setStudents(result.data);
    }
    return(
        <div>
            <StudentCreate></StudentCreate>
            <StudentUpdate stdID={studentID} fName={fullName} dc={address}></StudentUpdate>
            <StudentDelete stdID={studentID} fName={fullName} dc={address}></StudentDelete>
            <br></br>
            <hr></hr>
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr className="w3-center">
                    <th>PersonID</th>
                    <th>PersonName</th>
                    <th>Address</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(function fn(std) {
                            return(
                                <tr className="w3-center">
                                    <td>{std.studentID}</td>
                                    <td>{std.fullName}</td>
                                    <td>{std.address}</td>
                                    <td>
                                        <button type="button" class="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-blue" data-bs-toggle="modal" data-bs-target="#updateStudent" onClick={() => setStudentValue(std)}><i class="fa fa-edit w3-small"></i></button> | <button type="button" class="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-red" data-bs-toggle="modal" data-bs-target="#deleteStudent" onClick={() => setStudentValue(std)}><i class="fa fa-trash w3-small"></i></button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default StudentRead;