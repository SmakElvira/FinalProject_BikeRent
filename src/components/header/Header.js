import { NavLink } from "react-router-dom";

function Header () {
    const activeLink = "nav-list__link nav-list__link--active";
    const nonactiveLink = "nav-list__link"

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
                                <NavLink to='/' className={({isActive}) => isActive ? activeLink : nonactiveLink}>
                                    Прокат
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to='/thefts' className={({isActive}) => isActive ? activeLink : nonactiveLink}>
                                    Информация о кражах
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to='/officers' className={({isActive}) => isActive ? activeLink : nonactiveLink}>
                                    Сотрудники
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to='/infotheft' className={({isActive}) => isActive ? activeLink : nonactiveLink}>
                                    Сообщить о краже
                                </NavLink>
                            </li>
                        </ul>
                        <div className="log-in">
                            <NavLink to='/login' className="log-in__log">Войти</NavLink>
                            <p></p>
                            <NavLink to='/registration' className="log-in__log">Регистрация</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;