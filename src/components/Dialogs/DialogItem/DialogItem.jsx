import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.imgPost} src={props.img} />
            <NavLink  to={path} className={s.navLink} activeClassName={s.activeLink}> {props.name}</NavLink>
        </div>
    );
}



export default DialogItem;