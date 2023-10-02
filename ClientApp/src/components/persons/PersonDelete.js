import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
const PersonDelete = (props) =>{
    const [person] = useState(props.getData);
    const handleSubmit = () => {
        try {
            axios.delete("api/person/" + props.getData.personID);
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
                <ModalHeader>Are your sure to delete this Person?</ModalHeader>
                <ModalBody>
                    <Label>PersonID: <b>{person.personID}</b></Label><br></br>
                    <Label>FullName: <b>{person.fullName}</b> </Label><br></br>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.close}>Cancel</Button>
                    <Button color="primary" onClick={handleSubmit}>Delete</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default PersonDelete;