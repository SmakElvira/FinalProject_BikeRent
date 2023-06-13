import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
// import { officers } from "../../helpers/officersList";

function InfoOfficer () {
    const {id} = useParams();
    const officers = useSelector(state => state.officers)
    const officer = officers[id];
    console.log(officer);

    return (
        <main className="main">
        <div className="container">
            <h1 className="main__title">
                {officer.lastName} {officer.firstName}
            </h1>
            <ul className="info-theft">
                <li className="info-list__item">
                    <h3 className="item">Email:</h3>
                    <h3 className="item">{officer.email}</h3>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Client Id:</h3>
                    <h3 className="item">{officer.clientId}</h3>
                </li>
                <li className="info-list__item">
                    <h3>Одобрен:</h3>
                    <input className="item__input" type="checkbox" checked={officer.approved}></input>
                </li>
            </ul>
        </div>
    </main>
    )
}

export default InfoOfficer;