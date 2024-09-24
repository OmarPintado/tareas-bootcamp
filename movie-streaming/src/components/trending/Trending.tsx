import './Trending.css';
export const Trending = () => {
    return (
        <div className="trending">
            <div className="trending__header">
                <h2 className="trending__title">Trending</h2>
                <a href="#" className="trending__view-all">View all</a>
            </div>
            <div className="trending__list">
                <div className="trending__item">
                <img src="ruta/a/la/imagen/medellin.jpg" alt="Medellin" className="trending__image"/>
                    <div className="trending__overlay">
                        <button className="trending__button">
                            <i className="fas fa-play"></i>
                        </button>
                        <div className="trending__info">
                            <span>3:12:00</span>
                            <span>8.0</span>
                        </div>
                        <div className="trending__tags">
                            <span className="trending__tag">Action</span>
                            <span className="trending__tag">Comedy</span>
                        </div>
                    </div>
                    <p className="trending__title">Medellin</p>
                </div>
                {/* Repetir para otras películas */}
            </div>
        </div>
    )
}
