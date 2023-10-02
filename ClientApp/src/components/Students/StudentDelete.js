import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
const StudentDelete = (props) =>{
    const [student] = useState(props.getData);
    const handleSubmit = () => {
        try {
            axios.delete("student/" + props.getData.studentID);
            props.refreshData();
            props.close();
            alert("Delete successful person!");
        } catch(err) {
            alert(err);
        }
    }
    return(
        <div>
            <Modal isOpen={props.isOpen} >
                <ModalHeader>Are your sure to delete this Student?</ModalHeader>
                <ModalBody>
                    <Label>StudentID: <b>{student.studentID}</b></Label><br></br>
                    <Label>FullName: <b>{student.fullName}</b> </Label><br></br>
                    <Label>Address: <b>{student.address}</b></Label><br></br>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.close}>Cancel</Button>
                    <Button color="primary" onClick={handleSubmit}>Delete</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default StudentDelete;