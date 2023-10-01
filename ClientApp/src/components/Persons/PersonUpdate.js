import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
function PersonUpdate({isOpen}) {
    // const [personId, setPersonId] = useState("");
    // const [personName, setPersonName] = useState("");
    // const [address, setAddress] = useState("");
    // const [age, setAge] = useState("");
    const [person, setPerson] = useState({personId:"", personName:"", address:"", age:0});
    const [modal, setModal] = useState(isOpen);
    const toggle = () => setModal(!modal);

    const handleSubmit = () => {
        try {
            axios.put("person/" + person.personId, person);
            alert("Create successful person!");
        } catch(err) {
            alert(err);
        }
        toggle();
    }
    const handleInputChange = (e) => {
        setPerson({...person, [e.target.name]: e.target.value});
    }
    return (
        <div>
            <form>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader className='w3-blue' toggle={toggle}>Update Person</ModalHeader>
                    <ModalBody>
                    <Input name='personId' className='my-3' value={person.personId} onChange={handleInputChange} type='text' placeholder='Enter PersonID'></Input>
                        <Input name='personName'className='my-3' value={person.personName} onChange={handleInputChange} type='text' placeholder='Enter Person name'></Input>
                        <Input name='address'className='my-3' value={person.address} onChange={handleInputChange} type='text' placeholder='Enter Address'></Input>
                        <Input name='age'className='my-3' value={person.age} onChange={handleInputChange} type='number' placeholder='Enter Age'></Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                        <Button color="primary" onClick={handleSubmit}>
                            Save Change
                        </Button>
                    </ModalFooter>
                </Modal>
            </form>
            
        </div>
      );
    
}
export default PersonUpdate;