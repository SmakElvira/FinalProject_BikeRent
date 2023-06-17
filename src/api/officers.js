import { authClient } from "./client"

const namespace = 'officers';

export const getOfficers = async () => {
    const { data } = await authClient.get(`/${ namespace }`, null);

    return data;
};

export const getOfficer = async (id) => {
    const { data } = await authClient.get(`/${ namespace }/${ id }`, null);

    return data;
};

export const removeOfficer = async (id) => {
    const { data } = await authClient.delete(`/${ namespace }/${ id }`, null);

    return data;
};

export const createOfficer = async (payload) => {
    const { data } = await authClient.post(`/${ namespace }`, payload);

    return data;
};

export const editOfficer = async (payload) => {
    const { data } = await authClient.put(`/${ namespace }/${ payload.id }`, payload);

    return data;
};