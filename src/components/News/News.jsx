import React from 'react';
import s from "./News.module.css";
const News = (props) => {
    return (
        <div className={s.item} >
             <img src="https://bestcube.space/wp-content/uploads/0Jrvgf38V8.jpg" />
            <span >NEWS</span>
        </div>
    );
}
export default News;