import React from "react";
import { connect } from "react-redux";
import { fetchCharacters, fetchSpecies } from "../store/characterActions";
import MaterialTable from 'material-table';
import { CharacterModal } from './modal.js';
import { Spinner, Row, Col, Container } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CharacterTable extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCharacters());
  }

  getCharacterById(data) {
    this.props.dispatch(fetchSpecies(data.species)).then(specie => this.setState({ specie: specie }));
    this.setState({
      showModal: true,
      character: data,
    })
  }

  render() {
    let closeModal = () => this.setState({ showModal: false });
    const { error, loading, characters } = this.props;
    const columns = [
      { title: "Nome", field: "name" },
      { title: "Gênero", field: "gender" },
      { title: "Ano de nascimento", field: "birth_year" },
      { title: "Qtd Filmes", field: "films", render: rowData => rowData.films.length }
    ];

    if (error) {
      return <div>Erro! {error.message}</div>;
    }

    if (loading) {
      return <Container>
              <Row className="text-center mt-5">
                <Col>      
                  <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                  </Spinner>
                </Col>
              </Row>
            </Container>
    }

    return (
      <React.Fragment>
        <MaterialTable
          title="Star Wars"
          columns={columns}
          data={characters}
          options={{
            pageSize: 10
          }}

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
          character={this.state ? this.state.character : null}
          specie={this.state ? this.state.specie : null}
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

// const CharacterQuery = gql`
//   query {
//     result {
//       count
//       next
//       previous
//       results
//     }
//   }
// `;


// export default graphql(CharacterQuery, {
//   name: 'Characters'
// })(CharacterTable)

export default connect(mapStateToProps)(CharacterTable);