const api = 'https://swapi.co/api/people'

function getCharacters() {
  return fetch(api)
    .then(handleErrors)
    .then(res => res.json());
}

function getCharacterSpecies(urlSpecies){
  return fetch(urlSpecies)
    .then(handleErrors)
    .then(res => res.json());
}

export function fetchCharacters() {
  return dispatch => {
    dispatch(fetchCharactersBegin());
    return getCharacters()
      .then(json => {
        dispatch(fetchCharactersSuccess(json.results));
        return json.results;
      })
      .catch(error =>
        dispatch(fetchCharactersFailure(error))
      );
  };
}

export function fetchSpecies(urlSpecies) {
  return dispatch => {
    dispatch(fetchCharactersSpecie(urlSpecies));
    return getCharacterSpecies(urlSpecies)
      .then(json => {
        dispatch(fetchCharactersSpecieSuccess(json));     
        return json;
      })
      .catch(error =>
        dispatch(fetchCharactersSpecieFailure(error))
      );
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_CHARACTER_BEGIN = "FETCH_CHARACTER_BEGIN";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";
export const FETCH_CHARACTER_SPECIE = "FETCH_CHARACTER_SPECIE";
export const FETCH_CHARACTER_SPECIE_SUCCESS = "FETCH_CHARACTER_SPECIE_SUCCESS";
export const FETCH_CHARACTER_SPECIE_FAILURE = "FETCH_CHARACTER_SPECIE_FAILURE";

export const fetchCharactersBegin = () => ({
  type: FETCH_CHARACTER_BEGIN
});

export const fetchCharactersSuccess = character => ({
  type: FETCH_CHARACTER_SUCCESS,
  payload: { character }
});

export const fetchCharactersFailure = error => ({
  type: FETCH_CHARACTER_FAILURE,
  payload: { error }
});

export const fetchCharactersSpecie = () => ({
  type: FETCH_CHARACTER_SPECIE
});

export const fetchCharactersSpecieSuccess = specie => ({
  type: FETCH_CHARACTER_SPECIE_SUCCESS,
  payload: { specie }
});

export const fetchCharactersSpecieFailure = error => ({
  type: FETCH_CHARACTER_SPECIE_FAILURE,
  payload: { error }
});
