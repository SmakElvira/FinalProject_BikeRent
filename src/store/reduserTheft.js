import { thefts } from './../helpers/theftsList';

const defaultThefts = thefts

export const reducerThefts = (state = defaultThefts, action) => {
    switch (action.type) {
        case 'ADD_THEFT':
            return (state, [...state, action.payload])
        case 'DELETE_THEFT':
            return (state, [...state.filter(theft => theft.key !== action.payload)])
        default:
            return state
    }
}
