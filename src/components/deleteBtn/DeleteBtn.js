import React from 'react';

const DeleteButton = ({ removeFunction, id, redirectTo, setErrorMessage }) => {

    const onClickHandler = () => {
        removeFunction(id)
        .then(() => window.location.pathname = `${ redirectTo }`)
        .catch(() => setErrorMessage('Не удалось удалить сообщение'))
    }

  return (
    <button className='btn btn__big' onClick={ onClickHandler }>
        Удалить
    </button>
  )
}

export default DeleteButton;