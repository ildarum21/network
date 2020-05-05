import React from 'react';
import Profile from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";
import Redirect from "react-router-dom/es/Redirect";
 import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";





class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId=2;
        }
        this.props.getProfile(userId);
    }

    render()

    {

        return (
           <Profile {...this.props} profile={this.props.profile} />
        );
    }
};


let mapStateToProps =(state) =>({
    profile:state.profilePage.profile,
});
export default compose(
    connect(mapStateToProps,{getProfile}),
    withRouter,
    withAuthRedirect

)(ProfileContainer);
