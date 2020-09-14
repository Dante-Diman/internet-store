
/* 
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';
 */
import style from "../Components/LoginWindow/LoginWindow.module.scss";

let initialState ={ 
    togleStyleOn: '',
     close: style.close_Window,
      open: style.open_Window  
}  

 const loginWindowReducer = (state = initialState, action) => {
   
    switch(action.type){

        case CLOSE_WINDOW:
                              return {...state,
                togleStyleOn : action.close };  
                
     case OPEN_WINDOW:
                  return {...state,
         togleStyleOn : action.open };         
                      
            default :
                return state;
        } 
    
        

 }
/* Action creators */
const CLOSE_WINDOW = 'CLOSE_WINDOW';
export const CloseWindowReducer = (close) => ({type:CLOSE_WINDOW , togleStyleOn: close}) 
const OPEN_WINDOW = 'OPEN_WINDOW';
export const OpenWindowReducer = (open) => ({type:OPEN_WINDOW , togleStyleOn: open}) 
/* export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text  })  */  
/* Action creators */
export default loginWindowReducer;