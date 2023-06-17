import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import { user } from '../../store/user';
import { getReports } from "../../api/thifts";
import { checkAuth } from "../../utils/checkAuth";

import OneList from '../oneList/OneList';

function Thefts () {

    const userData = useSelector(user);

    const [reports, setReports] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        if (checkAuth(userData.data, userData.status)) {
            getReports()
            .then((data) => setReports(data.data))
            .catch(() => setErrorMessage('Ошибка получения информации о кражах'))
        } else {
            window.location.href = '/'
        }
    }, [userData.data, userData.status]);

    const reportsIsLoaded = userData.data && userData.status === 'fulfilled' && reports

  return (
    <main className="main">
        {
        errorMessage ?
        <p className="system-message">Ошибка получения информации о кражах</p>
        :
        reportsIsLoaded && !errorMessage ?
        <div className="container">
            <h1 class="main__title">Информация о кражах</h1>
            <ul className="info-list">
                {
                    reports.length ?
                    reports.map((e) => (
                        <OneList report={ e } key={ e._id } type="report"/>
                    ))
                    :
                    <div className="info-list__item">Сообщения о кражах отсутствуют</div>
                }
            </ul>
            <button className="btn btn__big">
                <a href="/infotheft">Сообщить о краже</a>
            </button>
        </div>
        :
        null
        }
    </main>
  )
}

export default Thefts;