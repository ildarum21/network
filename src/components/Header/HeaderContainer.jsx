import React from 'react';
import Header from "./Header";
import {Auth} from "../../redux/auth-reducer";
import connect from "react-redux/lib/connect/connect";





class HeaderContainer extends React.Component{
    componentDidMount() {
       this.props.Auth();
    }
    render() {
      return   <Header {...this.props}/>
    }
}

const mapStateToProps = (state)=>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

};
export default connect (mapStateToProps,{Auth})(HeaderContainer) ;