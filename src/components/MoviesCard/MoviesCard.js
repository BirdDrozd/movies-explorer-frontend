import "./MoviesCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function MoviesCard({ movieName, movieDuration, buttonLogo, moviePicture }) {
    return (
        <li className="movies-card">
            <div className="movies-card__header-wrapper">
                <div className="movies-card__text-container">
                    <h3 className="movies-card__title">{movieName}</h3>
                    <span className="movies-card__duration">{movieDuration}</span>
                </div>
<<<<<<< HEAD
                <button className="movies-card__save-button" aria-label="кнопка сохранения фильма" type="button">
=======
                <button className="movies-card__button" aria-label="кнопка сохранения фильма" type="button">
>>>>>>> 783e2d14d431ec82774a51b398845f31bba374bf
                    <img className="movies-card__button-logo" alt="сохранить фильм" src={buttonLogo}/>
                </button>
            </div> 
            <img className="movies-card__movie-picture" alt={movieName} src={moviePicture}/>
        </li>
    )
}

export default MoviesCard;