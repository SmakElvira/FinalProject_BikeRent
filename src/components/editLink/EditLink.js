import React from 'react';

const EditLink = ({ href }) => {
  return (
    <button className='btn btn__big'>
        <a href={ href }>Редактировать</a>
    </button>
  )
}

export default EditLink;