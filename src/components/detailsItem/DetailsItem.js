import React from 'react';

import { valueParser } from '../../utils/valueParsers';
import { bikeValues, statusValues } from '../../utils/valueParsers';

const DetailsItem = ({ name, value }) => {
  return (
        <>
        { name }:{` `}
            {
            name === 'Тип'
            ? 
            valueParser(bikeValues, value)
            :
            name === 'Статус'
            ? 
            valueParser(statusValues, value)
            :
            name === 'Одобрен'
            ?
            value ? 'Да' : 'Нет'
            :
            value ? value : 'Нет данных'
            }
        </>
  )
}

export default DetailsItem;