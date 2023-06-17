import { authClient, client } from "./client"

const namespace = 'cases';

export const getReports = async () => {
    const { data } = await authClient.get(`/${ namespace }`, null);

    return data;
};

export const createUnauthReport = async (payload) => {
    const { data } = await client.post('/public/report', payload);

    return data;
};

export const createReport = async (payload) => {
    const { data } = await authClient.post(`/${ namespace }`, payload);

    return data;
};

export const getReport = async (id) => {
    const { data } = await authClient.get(`/${ namespace }/${ id }`, null);

    return data;
};

export const removeReport = async (id) => {
    const { data } = await authClient.delete(`/${ namespace }/${ id }`, null);

    return data;
};

export const editReport = async (payload) => {
    const { data } = await authClient.put(`/${ namespace }/${ payload.id }`, payload);

    return data;
};