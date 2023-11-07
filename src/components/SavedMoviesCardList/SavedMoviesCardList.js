import "./SavedMoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import iconDelete from "../../images/Button-delete-card.svg";
import pictureThree from "../../images/imagesCards/pic_3.jpg";
import pictureFive from "../../images/imagesCards/pic_5.jpg";
import pictureTen from "../../images/imagesCards/pic_10.jpg";

function SavedMoviesCardList() {
    return (
        <section className="saved-movies">
            <ul className="saved-movies__list">
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={iconDelete} moviePicture={pictureThree} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={iconDelete} moviePicture={pictureFive} />
                <MoviesCard movieName={"33 слова о дизайне"} movieDuration={"1ч 47м"} buttonLogo={iconDelete} moviePicture={pictureTen} />
            </ul>
        </section>
    )
}

export default SavedMoviesCardList;