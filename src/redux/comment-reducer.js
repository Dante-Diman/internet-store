

let initialState = {
    dialogsData : [
        {id : 1, name : 'Dimych' , avatar: 'https://avatars.mds.yandex.net/get-pdb/1357142/e313b819-f672-4c45-986a-4d15ec8a3f65/s1200'},
        {id : 2, name : 'Andrey' , avatar: 'https://yt3.ggpht.com/a/AGF-l7-4kwBsdtra5qrWKEHdGYoH3neQc3ys2BaLkQ=s800-c-k-c0xffffffff-no-rj-mo'},
        {id : 3, name : 'Sveta' , avatar: 'https://avatars.mds.yandex.net/get-pdb/1874991/d35250bb-31ea-4d58-a149-a1924a81d1ad/s1200'},
        {id : 4, name : 'Sasha', avatar: 'https://yt3.ggpht.com/a/AGF-l7-mURL2748SjTGws0kEJajTEqYZOM1zF3A3pw=s900-c-k-c0xffffffff-no-rj-mo'},
        {id : 5, name : 'Victor' , avatar: 'https://yt3.ggpht.com/a/AGF-l79CP2KNAJF-NvzWDc3dMAVi1h4dhL23nvK6zQ=s900-c-k-c0xffffffff-no-rj-mo'},
        {id : 6, name : 'Valera', avatar: 'https://avatars.mds.yandex.net/get-pdb/1939052/e5b9ff0e-d9f1-437a-bdaa-33318c728fb7/s1200'}
            ],   
    messagesData : [
            {id : 1, message : 'cool offer' },
            {id : 2, message : 'Заказал Базовый доволен как слон' },
            {id : 3, message : 'Всем привет' },
            {id : 4, message : 'Берите премиум не пожалеете' },
            {id : 5, message : 'Y' }
                 ],
            newMessageText:'enter your message'
    
                 } 

                 const commentReducer = (state = initialState, action) => {
       
                    switch(action.type){
                    /* создание нового сообщения -------------------------------------------------------*/
                    case UPDATE_NEW_MESSAGE_TEXT:
                       return {...state,
                           newMessageText : action.newText
                       
                       };
                     case ADD_MESSAGE:
                                
                      return {
                           ...state, 
                           newMessageText:'',
                           messagesData: [...state.messagesData, {id:state.messagesData.length+1, message : state.newMessageText}]
                    };
                                 /*    stateCopy.messagesData.push(newMessage); */
                          
                       default :
                       return state;      
                   }  
                }
/* Action creators */
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT';
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => 
({type: UPDATE_NEW_MESSAGE_TEXT, newText: text  })  
export default commentReducer;