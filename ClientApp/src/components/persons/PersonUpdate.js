import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
const PersonUpdate = (props) =>{
    const [person, setPerson] = useState(props.getData);
    
    const handleSubmit = () => {
        try {
            axios.put("api/person/" + props.getData.personID, person);
            props.refreshData();
            props.close();
            alert("Update successful person!");
        } catch(err) {
            alert(err);
        }
    }
    const handleInputChange = (e) => {
        setPerson({...person, [e.target.name]: e.target.value});
    }
    return(
        <div>
            <Modal isOpen={props.isOpen} >
                <ModalHeader>Edit Person</ModalHeader>
                <ModalBody>
                    <Input name='personID' className='my-3' value={person.personID} onChange={handleInputChange} type='text' placeholder='Enter PersonID' required></Input>
                    <Input name='fullName' className='my-3' value={person.fullName} onChange={handleInputChange} type='text' placeholder='Enter Person name' required></Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.close}>Cancel</Button>
                    <Button color="primary" onClick={handleSubmit}>Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default PersonUpdate;