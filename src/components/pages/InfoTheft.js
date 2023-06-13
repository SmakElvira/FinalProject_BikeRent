import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import axios from "axios";

function InfoTheft () {
    const {id} = useParams();
    //const thefts = useSelector(state => state.thefts)
    //const theft = thefts[id];
    //console.log(theft);

    const [theft, setTheft] = useState([])

    useEffect(() => {
        axios
            .get(`https://sf-final-project-be.herokuapp.com/api/cases/${id}`) 
            .then (data => {
                setTheft(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    })

    console.log(theft);

    return (
        <main className="main">
        <div className="container">
            <h1 className="main__title">
                Сообщение о краже № {theft.licenseNumber}
            </h1>
            <ul className="info-theft">
                <li className="info-list__item">
                    <h3>Статус:</h3>
                    <select name="select" className="item select">
                        <option value="Новое">Новое</option>
                        <option value="В работе">В работе</option>
                        <option value="Завершено">Завершено</option>
                    </select>
                </li>
                <li className="info-list__item">
                    <h3 className="item">№ лицензии:</h3>
                    <h3 className="item">{theft.licenseNumber}</h3>
                </li>
                <li className="info-list__item">
                    <h3 className="item">ФИО владельца:</h3>
                    <h3 className="item">{theft.ownerFullName}</h3>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Client ID:</h3>
                    <h3 className="item">{theft.clientId}</h3>
                </li>
                <li className="info-list__item">
                    <h3>Тип велосипеда:</h3>
                    <select name="select" className="item select">
                        <option value="Обычный">Обычный</option>
                        <option value="Спортивный">Спортивный</option>
                    </select>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Цвет:</h3>
                    <h3 className="item">{theft.color}</h3>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Дата кражи:</h3>
                    <h3 className="item">{theft.date}</h3>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Дата сообщения о краже:</h3>
                    <h3 className="item">{theft.createdAt}</h3>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Дата последнего обновления информации:</h3>
                    <h3 className="item">{theft.updatedAt}</h3>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Дополнительная информация:</h3>
                    <h3 className="item">{theft.description}</h3>
                </li>
                <li className="info-list__item">
                    <h3>Ответственный сотрудник:</h3>
                    <select name="select" className="item select">
                        <option value="Сотрудник 1">Сотрудник 1</option>
                        <option value="Сотрудник 2">Сотрудник 2</option>
                        <option value="Сотрудник 3">Сотрудник 3</option>
                    </select>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Завершающий комментарий:</h3>
                    <h3 className="item">{theft.resolution}</h3>
                </li>
            </ul>
        </div>
    </main>
    )
}

export default InfoTheft;