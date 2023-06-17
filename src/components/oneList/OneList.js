import { NavLink } from "react-router-dom";

import DetailsItem from '../detailsItem/DetailsItem';

const reportDetails = [
  {id: 1, name: 'ФИО владельца', value: 'ownerFullName'},
  {id: 2, name: 'Номер лицензии', value: 'licenseNumber'},
  {id: 3, name: 'Цвет', value: 'color'},
  {id: 4, name: 'Тип', value: 'type'},
  {id: 5, name: 'Решение', value: 'resolution'},
];

const officerDetails = [
  {id: 1, name: 'Имя', value: 'firstName'},
  {id: 2, name: 'Фамилия', value: 'lastName'},
  {id: 3, name: 'Email', value: 'email'},
  {id: 4, name: 'Одобрен', value: 'approved'},
];

function OneList ({ report, officer, type }) {
    if (type === 'officer') {
        return (
                <li className="info-list__item">
                        { officerDetails.map((e) => (
                            <NavLink to={ `/officer/id=${ officer._id }` } className="item">
                                <DetailsItem name={ e.name } value={ officer[`${ e.value }`]} key={ e.id }/>
                            </NavLink>
                        )) }
                </li>
        )
    } else if (type === 'report') {
        return (
                <li className="info-list__item">
                      { reportDetails.map((e) => (
                        <NavLink to={ `/infotheft/id=${ report._id }` } className="item">
                            <DetailsItem name={ e.name } value={ report[`${ e.value }`] } key={ e.id }/>
                        </NavLink>
                      )) }
                </li>
        )
    }
}

export default OneList;