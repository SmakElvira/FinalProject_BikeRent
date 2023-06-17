import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { user } from '../../store/user';
import { createUnauthReport, 
          createReport, 
          getReport, 
          editReport } from './../../api/thifts';
import { getToken } from "../../api/token";
import { getOfficers } from './../../api/officers';
import { checkAuth } from "../../utils/checkAuth";

import {theftField,
        theftFieldValue,
        theftValidSchema,
        theftEditField,
        theftEditValidSchema} from "../../options/options";

import Form from "../form/Form";

function InfoTheft () {

    const userData = useSelector(user);

    const [report, setReport] = useState(null);
  
    const [officers, setOffisers] = useState(null);
    const [officersError, setOffisersError] = useState(false);
  
    const [processMessage, setProcessMessage] = useState(null);
  
    const [type, setType] = useState('');
    const [officer, setOfficer] = useState(null);
  
    const reportId = window.location.pathname.split('/')[3];
    
    useEffect(() => {
      if (reportId) {
        if (checkAuth(userData.data, userData.status)) {
              getOfficers()
              .then((data) => setOffisers(data.officers))
              .catch(() => {
                setProcessMessage('Ошибка: данные о сотрудниках не получены');
                setOffisersError(true);
                setOffisers([]);
              })
              getReport(reportId)
              .then((data) => {
                setReport(data.data)
                setType(data.data.type)
                setOfficer(data.data.officer)
              })
              .catch(() => {
                setProcessMessage('Ошибка: данные о кражах не получены');
              })
        }
  
      } else {
        if (userData.data && userData.status) {
              getOfficers()
              .then((data) => setOffisers(data.officers))
              .catch(() => {
                setProcessMessage('Ошибка: данные о сотрудниках не получены');
                setOffisersError(true);
                setOffisers([]);
              })
        }
      }
    }, [userData.data, userData.status]);
  
    const onReportHandler = (values) => {
      setProcessMessage(null)
  
      if (type.length === 0) {
        return setProcessMessage('Выберите тип велосипеда')
      }
      
      if (userData.data && getToken()) {
        createReport({...values, type, officer})
        .then(() => setProcessMessage('Сообщение успешно создано'))
        .catch(() => setProcessMessage('Не удалось создать сообщение'))
      }else{
        createUnauthReport({...values, type})
        .then(() => setProcessMessage('Сообщение успешно создано'))
        .catch(() => setProcessMessage('Не удалось создать сообщение'))
      }
    };
  
    const onEditHanlder = (values) => {
      editReport({...values, type, officer, id: report._id})
      .then(() => setProcessMessage('Сообщение успешно обновлено'))
      .catch((data) => setProcessMessage(data.response.data.message))
    }
  
    const officersLoaded = userData.data && userData.status === 'fulfilled' && officers
    
    if (reportId && report) {
      return (
        <main className="main">
          <Form 
              fields={ theftEditField }
              formValues={
                {
                  ownerFullName: report.ownerFullName, 
                  licenseNumber: report.licenseNumber, 
                  color: report.color,
                  date: report.date,
                  description: report.description,
                  resolution: report.resolution
                }
              } 
              validationSchema={ theftEditValidSchema } 
              onSubmit={ onEditHanlder } 
              submitName="Редактировать"
              formName="Редактирование сообщения"
              processMessage={ processMessage }
              isDirty={true}
              isValided={true}
          >
            <ul className='info-theft'>
              <li className="info-list__item">
                <label htmlFor="type" className="item">Тип:</label>
                <select defaultValue={ report.type } name="type" onClick={(e) => setType(e.target.value)}>
                  <option value="">Выберите тип велосипеда</option>
                  <option value="general">Обычный</option>
                  <option value="sport">Спортивный</option>
                </select>
              </li>
            </ul>
            {
            userData.data && userData.status === 'fulfilled' && !officersLoaded
            ?
            <p className="system-message">Загрузка сотрудников...</p>
            :
            officersError
            ?
            null
            :
            officers
            &&
            <ul className='info-theft'>
              <li className="info-list__item">
                <label htmlFor="officer">Сотрудник:</label>
                <select defaultValue={ report.officer } name="officer" onClick={(e) => setOfficer(e.target.value)}>
                  <option value="">Выберите сотрудника</option>
                  {officers.filter((e) => e.approved === true).map((e) => (
                      <option value={e._id} key={e._id}>{e.lastName} {e.firstName}</option>
                  ))}
                </select>
              </li>
            </ul>
            }
          </Form>
        </main>
      )
    } else if (!reportId && !report) {
      return (
        <main className="main">
          <Form 
              fields={ theftField }
              formValues={ theftFieldValue } 
              validationSchema={ theftValidSchema } 
              onSubmit={ onReportHandler } 
              submitName="Сообщить"
              formName="Сообщить о краже"
              processMessage={ processMessage }
          >
            <div className="info-list__item" >
              <label className="item" htmlFor="type">Статус:</label>
              <select className='item__input' name="type" onClick={(e) => setType(e.target.value)}>
                <option value="new">Новый</option>
                <option value="in_progress">В работе</option>
                <option value="done">Завершен</option>
              </select>
            </div>
            <div className="info-list__item" >
              <label className="item" htmlFor="type">Тип:</label>
              <select className='item__input' name="type" onClick={(e) => setType(e.target.value)}>
                <option value="">Выберите тип велосипеда</option>
                <option value="general">Обычный</option>
                <option value="sport">Спортивный</option>
              </select>
            </div>
            {
            userData.data && userData.status === 'fulfilled' && !officersLoaded
            ?
            <p className="system-message">Загрузка сотрудников...</p>
            :
            officersError
            ?
            null
            :
            officers
            &&
            <div className="info-list__item" >
              <label className="item" htmlFor="officer">Сотрудник:</label>
              <select className='item__input' name="officer" onClick={(e) => setOfficer(e.target.value)}>
                <option value="">Выберите сотрудника</option>
                {officers.filter((e) => e.approved === true).map((e) => (
                    <option value={e._id} key={e._id}>{e.lastName} {e.firstName}</option>
                ))}
              </select>
            </div>
            }
          </Form>
        </main>
      )
    }
  }

export default InfoTheft;