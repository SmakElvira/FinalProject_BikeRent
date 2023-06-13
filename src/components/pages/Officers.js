import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import OneOfficer from "../oneList/OneOffiser";
import { useState, useEffect } from "react";
import axios from "axios";

function Officers () {

    // const dispatch = useDispatch()
    // const officers = useSelector(state => state.officers)

    // const deleteOfficer = (key) => {
    //     dispatch({type: 'DELETE_OFFICERS', payload: key})
    // }

    const [officers, setOfficers] = useState([]);

    useEffect(() => {
        axios
            .get('https://sf-final-project-be.herokuapp.com/api/officers') 
            .then (data => {
                setOfficers(data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    })

    console.log(officers);

    return (
        <main className="main">
        <div className="container">
            <h1 className="main__title">
                Сотрудники
            </h1>
            {officers.length > 0 ?
                <ul className="info-list">
                    {officers.map((officer, index) => {
                            return(
                                <OneOfficer
                                    keys={officer.clientId}
                                    id={index} 
                                    lastName={officer.lastName} 
                                    firstName={officer.firstName}
                                    //deleteOfficer={deleteOfficer} 
                                />
                            )
                        })}
                </ul>
                :
                <div className="info-list__item">
                    Данные о сотрудниках отсутствуют
                </div>
            }
            <NavLink to='/newofficer'>
                <button className="btn btn__big">Добавить сотрудника</button>
            </NavLink>
        </div>
    </main>
    )
}

export default Officers;