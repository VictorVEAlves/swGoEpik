import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from "styled-components";
import logo from '../img/logo.jpg';

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
                        <Title>{this.props.character ? this.props.character.name : 'N/A'}</Title>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <div className="logo text-center">
                        <img src={logo} className="text-center" width="250" height="150" />
                    </div>
                    
                    <div>
                        <h3>Espécie: {this.props.specie ? this.props.specie.name : 'n/a'}</h3>
                        <h3>Linguagem: {this.props.specie ? this.props.specie.language : 'n/a'}</h3>
                        <h3>Ano de nascimento: {this.props.character ? this.props.character.birth_year : 'n/a'}</h3>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <MeuBotao className="btn-fechar" onClick={this.props.onHide}>Fechar</MeuBotao>
                </Modal.Footer>
            </Modal>
        );
    }
}

const MeuBotao = styled.button`
    background: linear-gradient(90deg, rgba(157,48,20,1) 0%, rgba(114,33,32,1) 35%, rgba(197,168,140,1) 100%);
    border: none;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: .4rem 1.5rem;
`;

const Title = styled.h1`
    background: linear-gradient(90deg, rgba(157,48,20,1) 0%, rgba(114,33,32,1) 35%, rgba(197,168,140,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;