import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setToken } from '../../api/token.js';
import { fetchLogin, fetchRegister } from '../../store/userSlice.js';

import { loginField, 
          loginFieldValue, 
          loginValidSchema, 
          regField, 
          regFieldValue, 
          regValidSchema } from '../../options/options.js';

import Form from '../form/Form';

function Registration (type) {
    
    const dispatch = useDispatch();

    const [processMessage, setProcessMessage] = useState(null);

    const onLoginHandler = async (values) => {
        dispatch(fetchLogin(values))
        .then((data) => {
          if ('error' in data) {
            setProcessMessage('Неверно введены данные');
          } else {
            setProcessMessage('Aвторизация прошла успешно');
            setToken(data.payload.data.token)
          }
        })
        .catch(() => {
            setProcessMessage('Ошибка сервера');
        })
    };

    const onRegisterHandler = async (values) => {
        dispatch(fetchRegister(values))
        .then((data) => {
          if ('error' in data) {
            setProcessMessage('Пользователь уже зарегистрирован');
          } else {
            setProcessMessage('Регистрация прошла успешно, перенаправляем на вход...');
    
            setTimeout(() => {
              window.location.href = '/login'
            }, 2000)
          }
        })
        .catch(() => {
            setProcessMessage('Ошибка сервера');
        })
    };

    return (
        <main className="main">
            {
                type.type === 'registration' ?
                <Form 
                    fields={regField}
                    formValues={regFieldValue} 
                    validationSchema={regValidSchema} 
                    onSubmit={onRegisterHandler} 
                    submitName="Зарегистрироваться"
                    formName="Регистрация"
                    processMessage={processMessage}
                />
                :
                type.type === 'login' ?
                <Form 
                fields={loginField} 
                formValues={loginFieldValue} 
                validationSchema={loginValidSchema} 
                onSubmit={onLoginHandler} 
                submitName="Войти"
                formName="Вход"
                processMessage={processMessage}
                />
                :
                null
            }
    </main>
    )
}

export default Registration;