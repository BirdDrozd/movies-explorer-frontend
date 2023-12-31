import "./Login.css";
import Logo from "../../images/Header-Logo.svg";
import { Link } from "react-router-dom";

function Login({handleLogIn}) {
    return(
        <section className="login">
            <div className="login__wrapper">
                <Link to="/" className="login__logo-link">
                    <img className="login__logo" src={Logo} alt="логотип" />
                </Link>
                <h2 className="login__header">Рады видеть!</h2>
                <form className="login__form">
                    <fieldset className="login__fieldset">
                        <label className="login__label login__email-label" for="email">E-mail</label>
                        <input className="login__input login__email-input" id="email" name="login-email" value={"pochta@yandex.ru"} type="email" placeholder="Ваш E-mail"/>
                    </fieldset>
                    <fieldset className="login__fieldset">
                        <label className="login__label login__password-label" for="password">Пароль</label>
                        <input className="login__input login__password-input" id="password" name="login-password" value={"12345678910"} type="password" placeholder="Пароль"/>
                    </fieldset>                    
                </form>
                <button className="login__button" onClick={handleLogIn} aria-label="авторизоваться">Войти</button>
                <div className="login__link-wrapper">
                    <span className="login__question">Ещё не зарегистрированы?</span>
                    <Link className="login__link" to="/signup">Регистрация</Link>
                </div>
            </div>
        </section>
    )
}

export default Login;