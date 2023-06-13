import { officers } from './../helpers/officersList';

const defaultOfficers = officers

export const reducerOfficers = (state = defaultOfficers, action) => {
  switch (action.type) {
      case 'ADD_OFFICERS':
          return (state, [...state, action.payload])
      case 'DELETE_OFFICERS':
        return (state, [...state.filter(theft => theft.clientId !== action.payload)])
      default:
          return state
  }
}