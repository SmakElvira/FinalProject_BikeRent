import React from 'react';

import { removeToken } from '../../api/token';

function OutBtn() {

  const onClickOut = () => {
    removeToken();
    window.location.href = '/'
  }

  return (
    <button className='log-in__log' onClick={ onClickOut }>
        Выйти
    </button>
  )
}

export default OutBtn;