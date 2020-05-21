import { NamesData, NamesActions } from '../actions/names';
import { ActionTypes } from '../actions/types'

const INITIAL_STATE: NamesData = {
  items: ['Test name'],
  currentName: undefined
};

const nameList = (state: NamesData = INITIAL_STATE, action: NamesActions) => {
  switch (action.type) {
    case ActionTypes.ADD_NAME:
      return {
        ...state,
        items: [...state.items, action.name]
      };
    case ActionTypes.SET_CURRENT_NAME: 
      return {
        ...state,
        currentName: action.name
      };
    case ActionTypes.DELETE_NAME:
      return {
        ...state,
        items: state.items.filter(item => item !== action.name)
      }
    default:
      return state;
  }
};

export default nameList;
