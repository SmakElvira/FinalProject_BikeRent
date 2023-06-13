// import * as yup from 'yup';
import { object, string } from "yup";

export const regFields = [
    {id: 1, label: 'Email', name: 'email', type: "text"},
    {id: 2, label: 'Пароль', name: 'password', type: "password"},
    {id: 3, label: 'Имя', name: 'firstName', type: "text"},
    {id: 4, label: 'Фамилия', name: 'lastName', type: "text"},
    {id: 5, label: 'Client ID', name: 'clientId', type: "text"},
];

export const regFieldValue = { email: '', password: '', firstName: '', lastName: '', clientId: ''};

export const regValidSchema = object().shape({
    email: string().email('Неверный E-mail').required('Заполните поле'),
    password: string().min(6, 'Пароль должен содержать минимум 6 символов').required('Заполните поле'),
    firstName: string(),
    lastName: string(),
    clientId: string().required('Заполните поле'),
});

export const loginField = [
    {id: 1, label: 'Email', name: 'email', type: "text"},
    {id: 2, label: 'Пароль', name: 'password', type: "password"},
];

export const loginFieldValue = { email: '', password: '' };

export const loginValidSchema = object().shape({
    email: string().email('Неверный E-mail').required('Заполните поле'),
    password: string().min(6, 'Пароль должен содержать минимум 6 символов').required('Заполните поле'),
});

export const theftField = [
    {id: 1, label: 'Номер лицензии', name: 'licenseNumber', type: "text"},
    {id: 2, label: 'ФИО пользователя', name: 'ownerFullName', type: "text"},
    {id: 3, label: 'Client ID', name: 'clientId', type: "text"},
    {id: 4, label: 'Цвет', name: 'color', type: "text"},
    {id: 5, label: 'Дата кражи', name: 'date', type: "text"},
    {id: 6, label: 'Дополнительный комментарий', name: 'description', type: "text"},
];

export const theftEditField = [
    {id: 1, label: 'Номер лицензии', name: 'licenseNumber', type: "text"},
    {id: 2, label: 'ФИО пользователя', name: 'ownerFullName', type: "text"},
    {id: 3, label: 'Цвет', name: 'color', type: "text"},
    {id: 4, label: 'Дата кражи', name: 'date', type: "text"},
    {id: 5, label: 'Дополнительный комментарий', name: 'description', type: "text"},
    {id: 6, label: 'Завершающий комментарий', name: 'resolution', type: "text"},
];

export const theftFieldValue = { licenseNumber: '', ownerFullName: '', clientId: '', color: '', description: '' };

export const theftValidSchema = object().shape({
    licenseNumber: string().required('Заполните поле'),
    ownerFullName: string().required('Заполните поле'),
    clientId: string().required('Заполните поле'),
});

export const theftEditValidSchema = object().shape({
    licenseNumber: string().required('Заполните поле'),
    ownerFullName: string().required('Заполните поле'),
});

export const officerField = [
    {id: 1, label: 'Фамилия', name: 'lastName', type: "text"},
    {id: 2, label: 'Имя', name: 'firstName', type: "text"},
    {id: 3, label: 'Email', name: 'email', type: "text"},
    {id: 4, label: 'Пароль', name: 'password', type: "password"},
    {id: 5, label: 'Client ID', name: 'clientId', type: "text"}
];

export const officerFieldValue = { lastName: '', firstName: '', email: '', password: '', clientId: '' };

export const officerValidSchema = object().shape({
    email: string().email('Неверный E-mail').required('Заполните поле'),
    password: string().min(6, 'Пароль должен содержать минимум 6 символов').required('Заполните поле'),
});

export const officerEditField = [
    {id: 1, label: 'Фамилия', name: 'lastName', type: "text"},
    {id: 2, label: 'Имя', name: 'firstName', type: "text"}
];