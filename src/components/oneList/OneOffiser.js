import { NavLink } from "react-router-dom";

function OneOfficer ({firstName, lastName, keys, id, deleteOfficer}) {

    return (
            <li className="info-list__item">
                <NavLink to={`/officer/${id}`} className="item">
                    {lastName} {firstName}
                </NavLink>
                <button className="btn" onClick={() => deleteOfficer(keys)}>Удалить</button>
            </li>
    )
}

export default OneOfficer;