import { combineReducers } from 'redux';
import { NamesData } from '../actions/names'
import names from './names'

export interface StoreState {
  names: NamesData
}

export const reducers = combineReducers<StoreState> ({
  names
})