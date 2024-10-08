import './NavBar.css';
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        console.log({inputValue})
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-menu">
                    <NavLink
                        to=''
                        className={({isActive}) => `navbar-item ${isActive ? 'active' : ''}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/genre'
                        className={({isActive}) => `navbar-item ${isActive ? 'active' : ''}`}
                    >
                        Genre
                    </NavLink>
                    <NavLink
                        to='/country'
                        className={({isActive}) => `navbar-item ${isActive ? 'active' : ''}`}
                    >
                        Country
                    </NavLink>
                </div>
            </div>
            <form onSubmit={onSubmit} className="navbar-center">
                <input type="text"
                       className="search-input"
                       placeholder="Search movies...."
                       value={inputValue}
                       onChange={onInputChange}
                />
                <button type="submit" className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </form>
            <div className="navbar-right">
                <div className="navbar-menu">
                    <NavLink
                        to='/movies'
                        className={({isActive}) => `navbar-item ${isActive ? 'active' : ''}`}
                    >
                        Movies
                    </NavLink>
                    <NavLink
                        to='/series'
                        className={({isActive}) => `navbar-item ${isActive ? 'active' : ''}`}
                    >
                        Series
                    </NavLink>
                    <NavLink
                        to='/animation'
                        className={({isActive}) => `navbar-item ${isActive ? 'active' : ''}`}
                    >
                        Animation
                    </NavLink>
                    <div className="navbar-item">Login/Signup</div>
                    <div className="navbar-item">
                        <i className="fa fa-bell"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}
