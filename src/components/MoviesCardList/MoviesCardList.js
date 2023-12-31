import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import savedMovieLogo from "../../images/Button-Saved-Movie.svg";
import unsavedMovieLogo from "../../images/Button-Unsaved-Movie.svg";
import pictureOne from "../../images/imagesCards/pic_1.jpg";
import pictureTwo from "../../images/imagesCards/pic_2.jpg";
import pictureThree from "../../images/imagesCards/pic_3.jpg";
import pictureFour from "../../images/imagesCards/pic_4.jpg";
import pictureFive from "../../images/imagesCards/pic_5.jpg";
import pictureSix from "../../images/imagesCards/pic_6.jpg";
import pictureSeven from "../../images/imagesCards/pic_7.jpg";
import pictureEight from "../../images/imagesCards/pic_8.jpg";
import pictureNine from "../../images/imagesCards/pic_9.jpg";
import pictureTen from "../../images/imagesCards/pic_10.jpg";
import pictureEleven from "../../images/imagesCards/pic_11.jpg";
import pictureTwelve from "../../images/imagesCards/pic_12.jpg";

function MoviesCardList() {
    return (
        <section className="movies">
            <ul className="movies__list">
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={unsavedMovieLogo} moviePicture={pictureOne} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={unsavedMovieLogo} moviePicture={pictureTwo} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={savedMovieLogo} moviePicture={pictureThree} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={unsavedMovieLogo} moviePicture={pictureFour} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={savedMovieLogo} moviePicture={pictureFive} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={unsavedMovieLogo} moviePicture={pictureSix} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={unsavedMovieLogo} moviePicture={pictureSeven} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={unsavedMovieLogo} moviePicture={pictureEight} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={unsavedMovieLogo} moviePicture={pictureNine} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={savedMovieLogo} moviePicture={pictureTen} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={unsavedMovieLogo} moviePicture={pictureEleven} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={unsavedMovieLogo} moviePicture={pictureTwelve} />
            </ul>
            <button className="movies__load-more-button" type="button" aria-label="загрузить больше фильмов">Ещё</button>
        </section>
    )
}

export default MoviesCardList;