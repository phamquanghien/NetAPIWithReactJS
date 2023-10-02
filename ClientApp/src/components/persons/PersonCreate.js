import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
const PersonCreate = (props) => {
    const [person, setPerson] = useState({personID: "", fullName:""});
    const handleSubmit = () => {
        try {
            axios.post("api/person", person);
            props.refreshData();
            props.close();
            setPerson({personID: "", fullName:""});
            alert("Create successful person!");
        } catch(err) {
            alert("That bai");
        }
    }
    const handleInputChange = (e) => {
        setPerson({...person, [e.target.name]: e.target.value});
    }
    return(
        <div>
            <Modal isOpen={props.isOpen} >
                <ModalHeader>Create a new Student</ModalHeader>
                <ModalBody>
                    <Input name='personID' className='my-3' value={person.personID} onChange={handleInputChange} type='text' placeholder='Enter PersonID'></Input>
                    <Input name='fullName' className='my-3' value={person.fullName} onChange={handleInputChange} type='text' placeholder='Enter Person name'></Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.close}>Cancel</Button>
                    <Button color="primary" onClick={handleSubmit}>Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default PersonCreate;