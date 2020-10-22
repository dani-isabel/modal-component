import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ModalComponent = () => {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Suscríbete a HBO</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>No te quedes afuera. Disfruta de los contenidos del momento.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">¿Quiero HBO!</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}
 
export default ModalComponent;
