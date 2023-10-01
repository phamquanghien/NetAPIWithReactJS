import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
const StudentUpdate = (props) =>{
    const [student, setStudent] = useState({});
    
    const handleSubmit = () => {
        try {
            axios.post("student", student);
            props.refreshData();
            alert("Create successful person!");
        } catch(err) {
            alert(err);
        }
    }
    const handleInputChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value});
    }
    console.log('Check props: ', props)
    return(
        <div>
            <Modal isOpen={props.isOpen} >
                <ModalHeader>Edit Student</ModalHeader>
                <ModalBody>
                    <Input name='studentID' className='my-3' value={student.studentID} onChange={handleInputChange} type='text' placeholder='Enter PersonID'></Input>
                    <Input name='fullName' className='my-3' value={student.fullName} onChange={handleInputChange} type='text' placeholder='Enter Person name'></Input>
                    <Input name='address' className='my-3' value={student.address} onChange={handleInputChange} type='text' placeholder='Enter Address'></Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.close}>Cancel</Button>
                    <Button color="primary" onClick={handleSubmit}>Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default StudentUpdate;