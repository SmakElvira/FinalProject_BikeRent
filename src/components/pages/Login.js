import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

function Login () {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    function handleSubmit (event) {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;

        signIn(user, () => navigate(fromPage, {replace: true}))
    }

    return (
        <main className="main">
        <div className="container">
            <h1 className="main__title">
                Войти
            </h1>
            <form className="info-theft" onSubmit={handleSubmit}>
                <label className="info-list__item">
                    <h3 className="item">Email:</h3>
                    <input className="item__input" name='username'></input>
                </label>
                <label className="info-list__item">
                    <h3 className="item">Пароль:</h3>
                    <input className="item__input"></input>
                </label>
            </form>
            <button className="btn btn__big" type='submit'>Войти</button>
        </div>
    </main>
    )
}

export default Login;