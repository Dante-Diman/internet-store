import img1 from '../assets/catalog/coats/1.jpg';
import img2 from '../assets/catalog/coats/2.jpg';
import img3 from '../assets/catalog/coats/3.jpg';
import img4 from '../assets/catalog/coats/4.jpg';
import img5 from '../assets/catalog/coats/5.jfif';
/* 
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';
 */


let initialState ={ 
  Group_1:  {
        
    
    productList:[
        {id:1, productUrl:img1, productTitle:"Coat", productPrice:"80$", productDescription:"Coat-1"  },
        {id:2, productUrl:img2, productTitle:"Coat", productPrice:"80$", productDescription:"Coat-1"  },
        {id:3, productUrl:img3, productTitle:"Coat",productPrice:"80$", productDescription:"Coat-1" },
        {id:4, productUrl:img4, productTitle:"Coat",productPrice:"80$", productDescription:"Coat-1"  },
        {id:5, productUrl:img5, productTitle:"Coat",productPrice:"80$", productDescription:"Coat-1"  }
  
    ],
  
    },
    Group_2:  {

       
        productList:[
            {id:1, productUrl:"../assets/catalog/TShorts/1.jpg", productTitle:"T-short", productPrice:"80$", productDescription:"T-short-1"  },
            {id:3, productUrl:"../assets/catalog/TShorts/2.jpg", productTitle:"T-short",productPrice:"80$", productDescription:"T-short-1" },
            {id:4, productUrl:"../assets/catalog/TShorts/3.jpg", productTitle:"T-short",productPrice:"80$", productDescription:"T-short-1"  },
            {id:2, productUrl:"../assets/catalog/TShorts/4.jpg", productTitle:"T-short", productPrice:"80$", productDescription:"T-short-1"  },
            {id:5, productUrl:"../assets/catalog/TShorts/5.jpg", productTitle:"T-short",productPrice:"80$", productDescription:"T-short-1"  }
      
        ],
         
 
        } ,

        showMore: false,
}  
 const CatalogReducer = (state = initialState, action) => {
   
    switch(action.type){

        case SHOW_MORE_G1:

       if (state.showMore===false) {
            return {...state,
                                
                showMore : true }; 

        }
        else{
            return {...state,
                                
                showMore : false }; 
        }
                               
                
     case SHOW_MORE_G2:
                  return {...state,
                    showMore : true };         
                      
            default :
                return state;
        } 
    
        

 }
/* Action creators */
const SHOW_MORE_G1 = 'SHOW_MORE_G1';
export const Group_1_Reducer = () => ({type:SHOW_MORE_G1 }) 
const SHOW_MORE_G2 = 'SHOW_MORE_G2';
export const Group_2_Reducer = () => ({type:SHOW_MORE_G2 }) 

/* Action creators */
export default CatalogReducer;