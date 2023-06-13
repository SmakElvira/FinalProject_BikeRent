import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
// import { thefts } from "../../helpers/theftsList";

function InfoTheft () {
    // const {id} = useParams();
    // const theft = thefts[id];
    let createdAt = new Date().toJSON().slice(0,10);
    console.log(createdAt)

    const dispatch = useDispatch()
    const thefts = useSelector(state => state.thefts)

    const addTheft = () => {

        const addCase = {
                key: '789',
                status: 'new',
                licenseNumber: document.getElementById('licenseNumber').value,
                ownerFullName: document.getElementById('ownerFullName').value,
                type: document.getElementById('type').value,
                color: document.getElementById('color').value,
                //clientId: 'document.getElementById(clientId).value',
                //createdAt: createdAt,
                //updatedAt: 'document.getElementById(updatedAt).value',
                date: document.getElementById('date').value,
                //officer: document.getElementById('officer').value,
                description: document.getElementById('description').value,
                //resolution: 'document.getElementById(resolution).value'
        }
        dispatch({type: 'ADD_THEFT', payload: addCase})
    }

    return (
        <main className="main">
        <div className="container">
            <h1 className="main__title">
                Сообщение о краже
            </h1>
            <ul className="info-theft">
                <li className="info-list__item">
                    <h3 className="item">№ лицензии:</h3>
                    <input className="item item__input" id='licenseNumber'></input>
                </li>
                <li className="info-list__item">
                    <h3 className="item">ФИО клиента:</h3>
                    <input className="item item__input" id='ownerFullName'></input>
                </li>
                {/* <li className="info-list__item">
                    <h3 className="item">Client ID:</h3>
                    <input className="item item__input" id='clientId'></input>
                </li> */}
                <li className="info-list__item">
                    <h3>Тип велосипеда:</h3>
                    <select name="select" className="item select" id='type'>
                        <option value="bike1">Обычный</option>
                        <option value="bike2">Спортивный</option>
                    </select>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Цвет:</h3>
                    <input className="item item__input" id='color'></input>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Дата кражи:</h3>
                    <input className="item item__input" id='date'></input>
                </li>
                {/* <li className="info-list__item">
                    <h3 className="item">Дата сообщения о краже:</h3>
                    <h3 className="item" id='createdAt'>{createdAt}</h3>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Дата последней информации:</h3>
                    <input className="item item__input" id='updatedAt'></input>
                </li> */}
                <li className="info-list__item">
                    <h3 className="item">Дополнительная информация:</h3>
                    <input className="item item__input" id='description'></input>
                </li>
                {/* <li className="info-list__item">
                    <h3>Ответственный сотрудник:</h3>
                    <select name="select" className="item select" id='officer'>
                        <option value="officer1">Иванов</option>
                        <option value="officer2">Павлов</option>
                        <option value="officer3">Карпов</option>
                    </select>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Завершающий комментарий:</h3>
                    <input className="item item__input" id='resolution'></input>
                </li> */}
            </ul>
            <button className="btn btn__big" onClick={() => addTheft()}>Сообщить</button>
            <button className="btn btn__big" onClick={() => console.log(thefts)}>Сообщить</button>
        </div>
    </main>
    )
}

export default InfoTheft;