import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { user } from '../../store/user';
import { checkAuth } from './../../utils/checkAuth';
import { getReport, removeReport } from './../../api/thifts';
import { getOfficer, removeOfficer } from './../../api/officers';

import DetailsItem from './../detailsItem/DetailsItem';
import DeleteButton from '../deleteBtn/DeleteBtn';
import EditLink from './../editLink/EditLink';

const reportDetails = [
    {id: 1, name: 'ФИО владельца', value: 'ownerFullName'},
    {id: 2, name: 'Номер лицензии', value: 'licenseNumber'},
    {id: 3, name: 'Цвет', value: 'color'},
    {id: 4, name: 'Тип', value: 'type'},
    {id: 5, name: 'Доп. информация', value: 'description'},
    {id: 6, name: 'Статус', value: 'status'},
    {id: 7, name: 'Сотрудник', value: 'officer'},
    {id: 8, name: 'Решение', value: 'resolution'},
]

const officerDetails = [
    {id: 1, name: 'Имя', value: 'firstName'},
    {id: 2, name: 'Фамилия', value: 'lastName'},
    {id: 3, name: 'Email', value: 'email'},
];

const Details = ({ type }) => {

    const userData = useSelector(user);

    const [report, setReport] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const [officer, setOfficer] = useState(null);

    useEffect(() => {
        if (checkAuth(userData.data, userData.status)) {

            if (type === 'officers') {
                getOfficer(window.location.pathname.split('=')[1])
                .then((data) => setOfficer(data.data))
                .catch((data) => setErrorMessage(data.response.data.message))
            } else if (type === 'infotheft') {
                getReport(window.location.pathname.split('=')[1])
                .then((data) => {
                    setReport(data.data)
                    if(data.data.officer){
                        getOfficer(data.data.officer)
                        .then((data) => setOfficer(data.data))
                        .catch((data) => setErrorMessage(data.response.data.message))
                    }
                })
                .catch((data) => setErrorMessage(data.response.data.message))
            }
        } else {
            window.location.href = '/'
        }
    })

    if (type === 'officers') {
        return (
            <main className="main">
                {
                officer
                &&
                <div className="container">
                    <ul className="info-theft">
                        { officerDetails.map((e) => (
                            <li className="info-list__item">
                                <DetailsItem name={ e.name } value={ officer[`${ e.value }`] } key={ e.id } />
                            </li>
                        )) }
                    </ul>

                    <div>
                        <EditLink href={ `/officers/edit/${ officer._id }` }/>
                        {
                            userData.data.data.user.id !== officer._id 
                            && 
                            <DeleteButton removeFunction={ removeOfficer } id={ officer._id } redirectTo="/officers" setErrorMessage={ setErrorMessage } />
                        }
                    </div>
                </div>
                }
                { errorMessage && <p className='system-message'>{ errorMessage }</p> }
            </main>
        )
    } else if (type === 'infotheft') {
        return (
            <main className="main">
                {
                report
                &&
                <div className="container">
                    <ul className="info-theft">
                        {
                        report.officer && officer
                        ?
                        reportDetails.map((e) => (
                            e.name === 'Сотрудник'
                            ?
                            <li className="info-list__item">
                                <DetailsItem name={ e.name } value={ `${officer.firstName} ${officer.lastName} ` } key={ e.id }/>
                            </li>
                            :
                            <li className="info-list__item">
                                <DetailsItem name={ e.name } value={ report[`${ e.value }`] } key={ e.id }/>
                            </li>
                        ))
                        :
                        reportDetails.map((e) => (
                            <li className="info-list__item">
                                <DetailsItem name={ e.name } value={ report[`${ e.value }`] } key={ e.id }/>
                            </li>
                        ))
                        }
                    </ul>
                    <div>
                        <EditLink href={ `/thefts/edit/${ report._id }` }/>
                        <DeleteButton removeFunction={ removeReport } id={ report._id } redirectTo="/thefts" setErrorMessage={ setErrorMessage } />
                    </div>
                </div>
                }
                { errorMessage && <p className='system-message'>{ errorMessage }</p> }
            </main>
        )
    }
}

export default Details;