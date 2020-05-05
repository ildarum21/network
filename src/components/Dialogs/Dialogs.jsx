import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Redirect from "react-router-dom/es/Redirect";


const Dialogs = (props) => {

    let dialogsElements =
        props.dialogsPage.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} id={dialog.id} img={dialog.img}/>)


    let messegesElement =
      props.dialogsPage.messagesData.map(m => <Message id={m.id} message={m.message}/>);


    const onSendMessageClick = () => {
        props.sendMessageCreator();

    };
    const onNewMessageChange =(e) =>{
        let body=e.target.value;
        props.UpdateNewMessageBodyCreator(body);
    };

   if(props.isAuth==false)return <Redirect to={'/login'} />;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messeges}>
                <div> {messegesElement} </div>
                <div>
                    <div>
                        <textarea  onChange={onNewMessageChange} value={props.dialogsPage.newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>

        </div>


    );
}
export default Dialogs;