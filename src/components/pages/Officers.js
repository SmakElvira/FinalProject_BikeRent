import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import { user } from '../../store/user';
import { getOfficers } from "../../api/officers";
import { checkAuth } from "../../utils/checkAuth";

import OneList from "../oneList/OneList";

function Officers () {

    const userData = useSelector(user);

    const [officers, setOfficers] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        if (checkAuth(userData.data, userData.status)) {
            getOfficers()
            .then((data) => setOfficers(data.officers))
            .catch(() => setErrorMessage('Ошибка: данные о сотрудниках не получены'))
        } else {
            window.location.href = '/'
        }
    }, [userData.data, userData.status]);

    const officerIsLoaded = userData.data && userData.status === 'fulfilled' && officers

  return (
    <main className="main">
        {
        errorMessage
        ?
        <p className="system-message">Ошибка: данные о сотрудниках не получены</p>
        :
        officerIsLoaded && !errorMessage
        ?
        <div className="container">
            <h1 class="main__title">Сотрудники</h1>
            <ul className="info-list">
                {officers.map((e) => (
                    <OneList officer={ e } key={ e._id } type="officer"/>
                ))}
            </ul>
        <button className="btn btn__big">
            <a href="/newofficer">Создать сотрудника</a>
        </button>
        </div>
        :
        null
        }
    </main>
  )
}

export default Officers;