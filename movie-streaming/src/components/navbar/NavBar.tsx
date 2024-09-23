import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul className="navbar-menu">
                    <li className="navbar-item active">Home</li>
                    <li className="navbar-item">Genre</li>
                    <li className="navbar-item">Country</li>
                </ul>
            </div>
            <div className="navbar-center">
                <input type="text" className="search-input" placeholder="Search movies...."/>
                <button className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <div className="navbar-right">
                <ul className="navbar-menu">
                    <li className="navbar-item">Movies</li>
                    <li className="navbar-item">Series</li>
                    <li className="navbar-item">Animation</li>
                    <li className="navbar-item">Login/Signup</li>
                    <li className="navbar-item">
                        <i className="fa fa-bell"></i>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
