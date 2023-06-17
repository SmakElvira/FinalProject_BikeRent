import axios from "axios";

import { getToken } from "./token";

export const client = axios.create({
    baseURL: 'https://sf-final-project-be.herokuapp.com/api',
    headers: {
        "Content-Type": "application/json"
    }
});

export const authClient = axios.create({
    baseURL: 'https://sf-final-project-be.herokuapp.com/api',
    headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + getToken()
    }
});