import {
  FETCH_CHARACTER_BEGIN,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
  FETCH_CHARACTER_SPECIE,
  FETCH_CHARACTER_SPECIE_SUCCESS,
  FETCH_CHARACTER_SPECIE_FAILURE
} from "./characterActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  specie: null
};

export default function characterReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_CHARACTER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.character
      };

    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case FETCH_CHARACTER_SPECIE:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CHARACTER_SPECIE_SUCCESS:
      return {
        ...state,
        loading: false,
        specie: action.payload.specie
      };

    case FETCH_CHARACTER_SPECIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        specie: null
      };
    default:
      return state;
  }
}
