import React from 'react';
import { Field } from 'formik';

const FormInput = ({ label, name, onBlur, onChange, values, touched, errors, type }) => {
    return (
        <li className="info-list__item">
            <label htmlFor={ name } className="item">{ label }:</label>
            <Field className='item__input' 
                    type={ type } 
                    onBlur={ onBlur } 
                    onChange={ onChange } 
                    name={ name } 
                    value={ !values[`${ name }`] ? '' : values[`${ name }`] } 
            />
            { touched[`${ name }`] && errors[`${ name }`] && <p className='system-message'>{errors[`${ name }`]}</p> }
        </li>
  )
}

export default FormInput;