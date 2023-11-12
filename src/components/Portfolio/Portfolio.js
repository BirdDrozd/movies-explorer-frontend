import "./Portfolio.css";

function Portfolio() {
    return(
    <nav className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
            <li className="portfolio__link">
                <a className="portfolio__link-item" href="https://github.com/BirdDrozd/how-to-learn" target="_blank" rel="noreferrer">
                    <span className="portfolio__project-name">Статичный сайт</span>
                    <span className="portfolio__project-link">↗</span>
                </a>
            </li>
            <li className="portfolio__link portfolio__link_border">
                <a className="portfolio__link-item" href="https://birddrozd.github.io/Russian-travel/" target="_blank" rel="noreferrer">
                    <span className="portfolio__project-name">Адаптивный сайт</span>
                    <span className="portfolio__project-link">↗</span>
                </a>
            </li>
            <li className="portfolio__link">
                <a className="portfolio__link-item" href="https://interactiveservice.nomoredomainsrocks.ru/#/sign-in" target="_blank" rel="noreferrer">
                    <span className="portfolio__project-name">Одностраничное приложение</span>
                    <span className="portfolio__project-link">↗</span>
                </a>
            </li>
        </ul>
    </nav>
    )
}

export default Portfolio;