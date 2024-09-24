import './RecentlyUpdated.css';

export const RecentlyUpdated = () => {
    return (
        <div className="recently-updated">
            <h2 className="recently-updated__title">Recently Updated</h2>
            <div className="recently-updated__list">
                <div className="recently-updated__item">
                    <img src="ruta/a/la/imagen/the-flash.jpg" alt="The Flash" className="recently-updated__image"/>
                    <div className="recently-updated__info">
                        <p>The Flash</p>
                        <span>Series/S 2/EP 9</span>
                        <span>11/05/23</span>
                    </div>
                </div>
                {/* Repetir para otros elementos */}
            </div>
            <button className="recently-updated__button">
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}
