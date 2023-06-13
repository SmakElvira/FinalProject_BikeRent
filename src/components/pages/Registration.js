function Registration () {
    return (
        <main className="main">
        <div className="container">
            <h1 className="main__title">
                Регистрация
            </h1>
            <ul className="info-theft">
                <li className="info-list__item">
                    <h3 className="item">Email:</h3>
                    <input className="item__input"></input>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Пароль:</h3>
                    <input className="item__input"></input>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Имя:</h3>
                    <input className="item__input"></input>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Фамилия:</h3>
                    <input className="item__input"></input>
                </li>
                <li className="info-list__item">
                    <h3 className="item">Client Id:</h3>
                    <input className="item__input"></input>
                </li>
            </ul>
            <button className="btn btn__big">Зарегистрироваться</button>
        </div>
    </main>
    )
}

export default Registration;