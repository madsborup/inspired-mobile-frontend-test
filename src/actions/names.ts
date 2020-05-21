import { ActionTypes } from './types'

export interface NamesData {
  items: string[],
  currentName: string | undefined
}

export interface addNameAction {
  type: ActionTypes.ADD_NAME,
  name: string
}

export interface setCurrentNameAction {
  type: ActionTypes.SET_CURRENT_NAME,
  name: string
}

export interface deleteNameAction {
  type: ActionTypes.DELETE_NAME,
  name: string
}

export const addName = (name: string) => {
  return {
    type: ActionTypes.ADD_NAME,
    name
  }
}

export const setCurrentName = (name: string) => {
  return {
    type: ActionTypes.SET_CURRENT_NAME,
    name
  }
}

export const deleteName = (name: string) => {
  return {
    type: ActionTypes.DELETE_NAME,
    name
  }
}

export type NamesActions = addNameAction | setCurrentNameAction | deleteNameAction;