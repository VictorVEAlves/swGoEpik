import React from "react";
import { connect } from "react-redux";
import { fetchCharacters, fetchSpecies } from "../store/characterActions";
import MaterialTable from 'material-table';
import {CharacterModal} from './modal.js';

class CharacterTable extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCharacters());
  }

  getCharacterById(data) {
    let specie = this.props.dispatch(fetchSpecies(data.species));    
    this.setState({
      showModal: true,
      character: data,
      specie: specie
    })
  }

  render() {
    let closeModal = () => this.setState({showModal: false});
    const { error, loading, characters } = this.props;
    const columns = [
      { title: "Nome", field: "name" },
      { title: "Gênero", field: "gender" },
      { title: "Ano de nascimento", field: "birth_year" }
    ];

    if (error) {
      return <div>Erro! {error.message}</div>;
    }

    if (loading) {
      return <div>Carregando...</div>;
    }

    return (
      <React.Fragment>
        <MaterialTable
          title="Star Wars"
          columns={columns}
          data={characters}
          actions={[{
              icon: 'edit',
              tooltip: 'Visualizar',
              onClick: (event, rowData) => this.getCharacterById(rowData),
            }
          ]}
        />
      <CharacterModal 
        show={this.state ? this.state.showModal : false}
        onHide={closeModal}
        character = {this.state ? this.state.character : null}
        specie = {this.state ? this.state.specie : null}
      />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.items,
  loading: state.loading,
  error: state.error,
  specie: state.specie
});

export default connect(mapStateToProps)(CharacterTable);