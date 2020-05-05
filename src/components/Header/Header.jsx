import React from 'react';
import  s  from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header=(props)=>{
    return(
    <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"></img>

        <div className={s.loginBlock}>
            {props.isAuth ? <h2>{props.login}</h2> : <NavLink to={'/login'}>login</NavLink>}
        </div>
    </header>
    );
};
export default Header;