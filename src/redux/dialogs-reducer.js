
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState =
{
    DialogsData: [
        { id: 1, name: 'Dimich',img:'//pristor.ru/wp-content/uploads/2019/01/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%8F%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%80%D0%B8%D1%81%D1%83%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-20.jpg'} ,
        { id: 2, name: 'Andery',img:'https://avatars.mds.yandex.net/get-pdb/27625/5f54eb6d-440c-4a6a-8ea9-0dfa9c2aca39/s1200' },
        { id: 3, name: 'Sveta' , img:'https://1001freedownloads.s3.amazonaws.com/vector/thumb/93202/1310420964.png'},
        { id: 4, name: 'Sasha', img:'https://www.nastol.com.ua/pic/201203/1280x1024/nastol.com.ua-19440.jpg'},
        { id: 5, name: 'Victor', img:'https://www.foundmyself.com/gallery/albums/userpics/39555/square-marks-the-spot-casino-illusion.jpg'},
        { id: 6, name: 'Valera', img:'http://vsamdelishno.ru/wa-data/public/shop/products/06/03/306/images/650/650.750x0.jpg'}
    ],
        messagesData: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo!' },
    { id: 4, message: 'Yo!' },
    { id: 5, message: 'Yo!' },
    { id: 6, message: 'Yo!!!!' }
],
    newMessageBody:""
};
export const dialogsReducer =(state=initialState,action)=>{
    let stateCopy ;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            stateCopy ={
                ...state,
                newMessageBody:action.body
            };
            return stateCopy;
        }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy={
                ...state,
                newMessageBody:'',
                messagesData: [...state.messagesData,{id: 6, message: body}]
            };
            return stateCopy;
        default:
            return state;

    }

};
export const sendMessageCreator =()=> {
    return{
        type: SEND_MESSAGE
    }
};
export const UpdateNewMessageBodyCreator=(body)=>{
    return{
        type: UPDATE_NEW_MESSAGE_BODY,
        body:body
    }
};
export default dialogsReducer;