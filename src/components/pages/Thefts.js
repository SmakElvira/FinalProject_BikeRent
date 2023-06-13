import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import OneTheft from "../oneList/OneTheft";
import { useEffect, useState } from "react";
import axios from "axios";
//import { RequireAuth } from "../../hoc/RequireAuth";

function Thefts () {

    const dispatch = useDispatch()
    const thefts = useSelector(state => state.thefts)

    const deleteTheft = (key) => {
        dispatch({type: 'DELETE_THEFT', payload: key})
    }

    //const [thefts, setThefts] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('https://sf-final-project-be.herokuapp.com/api/cases/') 
    //         .then (data => {
    //             setThefts(data.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // })

    // console.log(thefts);
    
    return (
        <main className="main">
        <div className="container">
            <h1 className="main__title">
                Сообщения о кражах
            </h1>
            {thefts.length > 0 ?
                <ul className="info-list">
                    {thefts.map((theft, index) => {
                        return(
                            //<RequireAuth>
                                <OneTheft 
                                    keys={theft.key}
                                    id={index} 
                                    license={theft.licenseNumber} 
                                    nameClient={theft.ownerFullName} 
                                    status={theft.status}
                                    deleteTheft={deleteTheft} 
                                />
                            //</RequireAuth>
                        )
                    })}
                </ul>
                :
                <div className="info-list__item">
                    Сообщения о кражах отсутствуют
                </div>
            }
            <NavLink to='/infotheft'>
                <button className="btn btn__big">Сообщить о краже</button>
            </NavLink>
            {/* <p>
                Object{cases}
            </p> */}
        </div>
    </main>
    )
}

export default Thefts;