import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
// import { officers } from "../../helpers/officersList";

function InfoOfficer () {
    // const {id} = useParams();
    // const officer = officers[id];
    const dispatch = useDispatch()
    const officers = useSelector(state => state.officers)

    const addOfficer = () => {

        const addCase = {
            email: document.getElementById('email').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            //password: 'kjk542hh',
            clientId: document.getElementById('clientId').value,
            approved: document.getElementById('approved').checked
        }
        dispatch({type: 'ADD_OFFICERS', payload: addCase})
    }

    return (
        <main className="main">
        <div className="container">
            <h1 className="main__title">
                Новый сотрудник
            </h1>
            <ul className="info-theft">
                <li className="info-list__item">
                    <h3 className="item">Фамилия:</h3>
                    <input className="item item__input" id='lastName'></input>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Имя:</h3>
                    <input className="item item__input" id='firstName'></input>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Email:</h3>
                    <input className="item item__input" id='email'></input>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Client Id:</h3>
                    <input className="item item__input" id='clientId'></input>
                </li>
                <li className="info-list__item">
                    <h3>Одобрен:</h3>
                    <input className="item__input" type="checkbox" id='approved'></input>
                </li>
            </ul>
            <button className="btn btn__big" onClick={() => addOfficer()}>Добавить</button>
            <button className="btn btn__big" onClick={() => console.log(officers)}>Сообщить</button>
        </div>
    </main>
    )
}

export default InfoOfficer;