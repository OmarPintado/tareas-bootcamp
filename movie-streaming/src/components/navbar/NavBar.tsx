import './NavBar.css';
import React, {useState} from 'react';

export const NavBar = () => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target} : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        console.log({inputValue})
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <ul className="navbar-menu">
                    <li className="navbar-item active">Home</li>
                    <li className="navbar-item">Genre</li>
                    <li className="navbar-item">Country</li>
                </ul>
            </div>
            <form onSubmit={ onSubmit } className="navbar-center">
                <input type="text"
                       className="search-input"
                       placeholder="Search movies...."
                       value={ inputValue }
                       onChange={onInputChange}
                />
                <button type="submit" className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </form>
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
