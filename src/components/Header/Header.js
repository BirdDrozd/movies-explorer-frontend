import "./Header.css";
import { useContext } from "react";
import { Link, useLocation, NavLink } from 'react-router-dom';
import headerLogo from "../../images/Header-Logo.svg";
import headerProfilelogo from "../../images/Button__COLOR_icon-main.svg";
import IsLoggedInContext from "../../contexts/IsLoggedInContext";

function Header({ handleMenuOpen }) {
    const location = useLocation();
    const isLoggedIn = useContext(IsLoggedInContext);
    const headerClassName = `header ${location.pathname === '/' && 'header_main'}`;
    const movieTextColor = `header__authorized-link-item ${location.pathname === '/' ? 'header__authorized_text-main' : 'header__authorized_text'}`;
    const profileTextColor = `header__profile-link-item ${location.pathname === '/' ? 'header__profile_text-main' : 'header__profile_text'}`
    const burgerButton = `header__burger-open ${location.pathname === '/' ? 'header__burger-open_main' : 'header__burger-open_other'}`

    return (
        <header className={headerClassName}>
            <div className="header__wrapper">
                <Link className="header__logo-link" to="/">
                    <img className="header__logo" src={headerLogo} alt="логотип" />
                </Link>
                {isLoggedIn ? (
                    <div className="header__container">
                        <nav className="header__nav-authorized">
                            <ul className="header__authorized-movies">
                                <li className="header__authorized-link"><NavLink className={movieTextColor} to='/movies'>Фильмы</NavLink></li>
                                <li className="header__authorized-link"><NavLink className={movieTextColor} to='/saved-movies'>Сохранённые фильмы</NavLink></li>
                            </ul>
                            <ul className="header__authorized-profile">
                                <li className="header__profile-link"><NavLink className={profileTextColor} to='/profile'>Аккаунт</NavLink></li>
                                <li className="header__profile-link-logo">
                                    <Link className="header__profile-logo-item" to='/profile'>
                                        <img className="header__profile-logo" alt="логотип профиля" src={headerProfilelogo} />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <button className={burgerButton} type="button" aria-label="открыть меню" onClick={handleMenuOpen} />
                    </div>
                ) : (
                    <div className="header__container">
                        <nav className="header__nav-unauthorized">
                            <ul className="header__unauthorized-landing">
                                <li className="header__unauthorized-signup"><Link className="header__unauthorized-signup-item" to='/signup'>Регистрация</Link></li>
                                <li className="header__unauthorized-signin"><Link className="header__unauthorized-signin-item" to='/signin'>Войти</Link></li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
};

export default Header;
