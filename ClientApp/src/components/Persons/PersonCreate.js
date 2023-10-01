import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
function PersonCreate(args) {
    const [person, setPerson] = useState({personId:"", personName:"", address:"", age:0});
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const handleSubmit = () => {
        try {
            axios.post("person", person);
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
            <h2>
                Person list
                <Button className='w3-right' color="success" onClick={toggle}>
                    Add new Person
                </Button>
            </h2>
            <form onSubmit={handleSubmit}>
                <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader className='w3-blue' toggle={toggle}>Create a new Person</ModalHeader>
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
export default PersonCreate;