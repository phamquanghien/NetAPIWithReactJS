import { Table, Button } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import StudentCreate from './StudentCreate';
import StudentUpdate from './StudentUpdate';
import StudentDelete from "./StudentDelete";
function StudentRead(){
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({});
    const [showStudentCreate, setShowStudentCreate] = useState(false);
    const [showStudentUpdate, setShowStudentUpdate] = useState(false);
    const [showStudentDelete, setShowStudentDelete] = useState(false);
    useEffect(() => {
        (async () => getAllStudent())()
    },[]);
    async function getAllStudent() {
        const result = await axios.get('student');
        setStudents (result.data);
    }
    const handleStudentUpdate = (std) => {
        setShowStudentUpdate(true);
        setStudent(std);
    }
    const handleStudentDelete = (std) => {
        setShowStudentDelete(true);
        setStudent(std);
    }
    return(
        <div>
            <StudentCreate/>
            <div>
                <h2>
                    Student list
                    <Button className="w3-right" color="primary" outline onClick={() => setShowStudentCreate(true)}><i className="fa fa-plus"></i> Add new</Button>
                    <StudentCreate isOpen={showStudentCreate} close={() => setShowStudentCreate(false)} refreshData = {() => getAllStudent()}/>
                    {
                        showStudentUpdate &&
                        <StudentUpdate isOpen={showStudentUpdate} close={() => setShowStudentUpdate(false)} refreshData = {() => getAllStudent()} getData={student}/>
                    }
                    {
                        showStudentDelete &&
                        <StudentDelete isOpen={showStudentDelete} close={() => setShowStudentDelete(false)} refreshData = {() => getAllStudent()} getData={student}/>
                    }
                </h2>
                
            </div>
            <hr/>
            <Table hover responsive striped>
                <thead>
                    <tr className="w3-center w3-blue">
                        <th>StudentID</th>
                        <th>FullName</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(std =>
                            <tr className="w3-center" key={std.studentID}>
                                <td>{std.studentID}</td>
                                <td>{std.fullName}</td>
                                <td>{std.address}</td>
                                <td>
                                <button type="button" className="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-blue" onClick={() => handleStudentUpdate(std)}><i className="fa fa-edit w3-small"></i></button> | <button type="button" className="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-red" onClick={() => handleStudentDelete(std)}><i className="fa fa-trash w3-small"></i></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default StudentRead;