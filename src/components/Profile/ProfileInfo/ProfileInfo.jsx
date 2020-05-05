import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../../common/Loader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div>
                <h4>Полное имя: {props.profile.fullName}</h4>
            </div>
            <div>
                <ProfileStatus status={'Hello '} />
            </div>

        </div>
    );
}
export default ProfileInfo;
