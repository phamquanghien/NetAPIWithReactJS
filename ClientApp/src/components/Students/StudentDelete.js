import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
const StudentDelete = (props) =>{
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
                    <Label>StudentID: <b>{props.getData.studentID}</b></Label><br></br>
                    <Label>FullName: <b>{props.getData.fullName}</b> </Label><br></br>
                    <Label>Address: <b>{props.getData.address}</b></Label><br></br>
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