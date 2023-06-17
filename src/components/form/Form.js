import React from 'react';
import { Formik, Form as FormikForm } from 'formik';

import FormInput from './FormInput';

const Form = ({ children, fields, formValues, validationSchema, onSubmit, submitName, formName, processMessage }) => {
  
    return (
        <div className="container">
            <Formik
                initialValues={ formValues }
                onSubmit={ (values) => { onSubmit(values) } }
                validationSchema={ validationSchema }
            >
            {({ values, errors, touched, handleChange, handleBlur }) => (
                
                <FormikForm >
                <div className='main__title'>{ formName }</div>
                <ul className="info-theft">
                        {fields.map((e) => (
                            <FormInput 
                                label={ e.label } 
                                name={ e.name }
                                type={ e.type } 
                                values={ values } 
                                onBlur={ handleBlur }
                                onChange={ handleChange }
                                touched={ touched }
                                errors={ errors }
                                key={ e.id }
                            />
                        ))}
                </ul>
                { children }
                <button className="btn btn__big" type="submit">{ submitName }</button>
                </FormikForm>
            )}
            </Formik>
            { processMessage && <p className='system-message'>{ processMessage }</p> }
        </div>
    )
}

export default Form;