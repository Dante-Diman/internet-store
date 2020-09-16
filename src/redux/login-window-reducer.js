
/* 
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';
 */
import style from "../Components/LoginWindow/LoginWindow.module.scss";

let initialState ={ 
    togleStyleOn: style.close_Window, 
     close: style.close_Window,
      open: style.open_Window  
      
}  

 const loginWindowReducer = (state = initialState, action) => {
   
    switch(action.type){

        case CLOSE_WINDOW:
                              return {...state,
                togleStyleOn : state.close };  
                
     case OPEN_WINDOW:
                  return {...state,
         togleStyleOn : state.open };         
                      
            default :
                return state;
        } 
    
        

 }
/* Action creators */
const CLOSE_WINDOW = 'CLOSE_WINDOW';
export const CloseWindowReducer = () => ({type:CLOSE_WINDOW }) 
const OPEN_WINDOW = 'OPEN_WINDOW';
export const OpenWindowReducer = () => ({type:OPEN_WINDOW }) 

/* Action creators */
export default loginWindowReducer;