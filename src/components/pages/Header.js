import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import { user } from '../../store/user';
import Auth from "../auth/Auth";
import OutBtn from "../outBtn/OutBtn";

function Header () {

    const activeLink = "nav-list__link nav-list__link--active";
    const nonactiveLink = "nav-list__link";

    const userData = useSelector(user);

    const userIsLoaded = userData.status === 'fulfilled' || userData.status === 'rejected' || userData.status === 'idle';

    return (
        <header className="header">
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <NavLink to='/' className="logo">
                            Bike Rental
                        </NavLink>
                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink to='/' className={({ isActive }) => isActive ? activeLink : nonactiveLink}>
                                    Прокат
                                </NavLink>
                            </li>
                            { userData.data && userIsLoaded
                            &&
                                <li className="nav-list__item">
                                    <NavLink to='/thefts' className={({ isActive }) => isActive ? activeLink : nonactiveLink}>
                                        Информация о кражах
                                    </NavLink>
                                </li>
                            }
                            { userData.data && userIsLoaded
                            &&
                                <li className="nav-list__item">
                                    <NavLink to='/officers' className={({ isActive }) => isActive ? activeLink : nonactiveLink}>
                                        Сотрудники
                                    </NavLink>
                                </li>
                            }
                            <li className="nav-list__item">
                                <NavLink to='/infotheft' className={({ isActive }) => isActive ? activeLink : nonactiveLink}>
                                    Сообщить о краже
                                </NavLink>
                            </li>
                        </ul>
                        <div className="log-in">
                            { userIsLoaded
                            &&
                            <>
                                <Auth className="log-in__log" />
                            { userData.data && <OutBtn /> }
                            </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;