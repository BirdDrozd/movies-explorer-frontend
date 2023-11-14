import "./AboutMe.css";
import profilePhoto from "../../images/myPhoto.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__wrapper">
                <div className="about-me__title-wrapper">
                    <h3 className="about-me__title">Студент</h3>
                </div>
                <div className="about-me__profile">
                    <ul className="about-me__profile-list">
                        <li className="about-me__profile-header"><h2 className="about-me__profile-header-item">Владислав</h2></li>
                        <li className="about-me__profile-subtitle"><span className="about-me__profile-subtitle-item">Фронтенд-разработчик, 28 лет</span></li>
                        <li className="about-me__profile-description"><p className="about-me__profile-description-item">
                        Я родился в городе Калининград, закончил университет по специальности электроэнергетики и электротехники.
                        Год назад переехал в другую страну, и начал жизнь с чистого листа.
                        Давно хотел попасть в IT-индустрию и решил попробовать пройти обучения от Яндекс Практикума.
                        Спустя год обучения, могу с уверенностью сказать, что каждый может выучить любой язык программирования и изменить свою жизнь к лучшему.
                        </p></li>
                        <li className="about-me__profile-link">
                            <a className="about-me__profile-link-item" href="https://github.com/BirdDrozd"
                            target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                    <img className="about-me__profile-photo" src={profilePhoto} alt="фотография студента"/>
                </div>
                <Portfolio />
            </div>
        </section>
    )
}

export default AboutMe;