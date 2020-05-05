import React from 'react';

import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";





let mapStateToProps =(state) =>{
    return{
       dialogsPage:state.dialogsPage,
    }
};
let mapDispatchToProps =(dispatch) =>{
    return{
        sendMessageCreator :() =>{
            dispatch(sendMessageCreator());
        },
        UpdateNewMessageBodyCreator:(body)=>{
            dispatch(UpdateNewMessageBodyCreator(body));
        }
    }
};


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);