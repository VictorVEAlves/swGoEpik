import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export class CharacterModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.character ? this.props.character.name : 'Personagem'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>Espécie: {this.props.specie ? this.props.specie.name : 'n/a'}</p>
                        <p>Linguagem: {this.props.specie ? this.props.specie.language : 'n/a'}</p>
                        <p>Veículos:</p>
                    </div>
                     
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}