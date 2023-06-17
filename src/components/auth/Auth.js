import React from 'react';
import { useSelector } from 'react-redux';

import { user } from '../../store/user';

const auth = [
  {id: 1, name: 'Войти ', href: '/login', hideWithAuth: true},
  {id: 2, name: 'Регистрация', href: '/registration', hideWithAuth: true},
]

const Auth = () => {

  const userData = useSelector(user);

  const userIsLoaded = userData.status === 'fulfilled' || userData.status === 'rejected' || userData.status === 'idle';
  
  return (
    userIsLoaded
    &&
    <div className="log-in__log">
      { auth.map((e) => (
        userData.data && userData.status === 'fulfilled' && e.hideWithAuth ?
        null
        :
        <a href={ e.href } key={ e.id } className="log-in__log">{ e.name }</a>
      )) }
    </div>
  )
}

export default Auth;