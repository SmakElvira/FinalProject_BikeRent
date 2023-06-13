import { NavLink } from "react-router-dom";

function OneTheft ({license, nameClient, status, id, deleteTheft, keys}) {

    

    return (
            <li className="info-list__item">
                <NavLink to={`/infotheft/${id}`} className="item">
                    № лицензии: {license}, ФИО владельца: {nameClient}, статус: {status}
                </NavLink>
                <button className="btn" onClick={() => deleteTheft(keys)}>Удалить</button>
            </li>
    )
}

export default OneTheft;