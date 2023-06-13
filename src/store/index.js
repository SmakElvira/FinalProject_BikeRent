import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { reducerThefts } from './reduserTheft';
import { reducerOfficers } from './reduserOfficer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers ({ 
    thefts: reducerThefts, 
    officers: reducerOfficers
})

export const store = configureStore({
    reducer: rootReducer,
  }, composeWithDevTools(applyMiddleware(thunk)));