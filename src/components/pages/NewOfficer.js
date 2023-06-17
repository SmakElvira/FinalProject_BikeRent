import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { user } from '../../store/user';
import { createOfficer, getOfficer, editOfficer } from '../../api/officers';
import { checkAuth } from '../../utils/checkAuth';

import { officerField,
          officerFieldValue,
          officerValidSchema,
          officerEditField } from '../../options/options';

import Form from '../form/Form';

function InfoOfficer () {
    const userData = useSelector(user);

    const [officer, setOfficer] = useState(null);

    const [processMessage, setProcessMessage] = useState(null);

    const [approved, setApproved] = useState(false);

    const onCreateHandler = (values) => {
      createOfficer({...values, approved})
      .then(() => setProcessMessage('Сотрудник успешно зарегистрирован'))
      .catch((data) => setProcessMessage(data.response.data.message))
    }

    const onEditHaldler = (values) => {
      editOfficer({...values, approved, id: officer._id})
      .then(() => setProcessMessage('Данные сотрудника успешно изменены'))
      .catch((data) => setProcessMessage(data.response.data.message))
    }

    const officerId = window.location.pathname.split('/')[3];
    
    useEffect(() => {
      if (checkAuth(userData.data, userData.status)) {
        if (officerId) {
          getOfficer(officerId)
          .then((data) => {
            setOfficer(data.data); 
            setApproved(data.data.approved)
          })
          .catch((data) => setProcessMessage(data.response.data.message))
        }
      }
    }, [userData.data, userData.status]);

  if (officerId && officer) {
      return (
        <main className="main">
            <div className="container">
                <Form 
                    fields={ officerEditField }
                    formValues={ {firstName: officer.firstName, lastName: officer.lastName} } 
                    onSubmit={ onEditHaldler }
                    submitName="Редактировать"
                    formName="Редактировать сотрудника"
                    processMessage={ processMessage }
                    isDirty={true}
                    isValided={true}
                >
                <div className="info-list__item">
                    <label  htmlFor="approved">Одобрить:</label>
                    <input type="checkbox" 
                            name="approved" 
                            defaultChecked={ officer.approved } 
                            value={ approved } 
                            onChange={ () => setApproved(prev => !prev) }
                    />
                </div>
                </Form>
            </div> 
      </main>
      )
  } else if (!officer && !officerId) {
    return (
      <main className="main">
        <div className="container">
          <Form 
            fields={ officerField }
            formValues={ officerFieldValue } 
            validationSchema={ officerValidSchema } 
            onSubmit={ onCreateHandler } 
            submitName="Создать сотрудника"
            formName="Создать"
            processMessage={ processMessage }
          >
          <div className="info-list__item">
            <label htmlFor="approved">Одобрить:</label>
            <input type="checkbox" name="approved" value={ approved } onChange={ () => setApproved(prev => !prev) }/>
          </div>
          </Form>
        </div> 
      </main>
    )
  }
}

export default InfoOfficer;