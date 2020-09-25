import img1 from '../assets/catalog/TShorts/1.jpg';
import img2 from '../assets/catalog/TShorts/2.jpg';
import img3 from '../assets/catalog/TShorts/3.jpg';
import img4 from '../assets/catalog/TShorts/4.jpg';
import img5 from '../assets/catalog/TShorts/5.jpg';



let initialState ={ 
       
    showMore: false,
    productList:[
        {id:1, productUrl:img1, productTitle:"TShort", productPrice:"80$", productDescription:"TShort-1"  },
        {id:2, productUrl:img2, productTitle:"TShort", productPrice:"50$", productDescription:"TShort-2"  },
        {id:3, productUrl:img3, productTitle:"TShort",productPrice:"40$", productDescription:"TShort-3" },
        {id:4, productUrl:img4, productTitle:"TShort",productPrice:"70$", productDescription:"TShort-4"  },
        {id:5, productUrl:img5, productTitle:"TShort",productPrice:"60$", productDescription:"TShort-5"  }
  
    ],
  
    }
  
        

 const CatalogReducerGroup2 = (state = initialState, action) => {
   
    switch(action.type){

        case SHOW_MORE:

       if (state.showMore===false) {
            return {...state,
                                
                showMore : true }; 

        }
        else{
            return {...state,
                                
                showMore : false }; 
        }
                                  
            default :
                return state;
        } 
    
        

 }
/* Action creators */
const SHOW_MORE= 'SHOW_MORE2';
export const Group_Reducer = () => ({type:SHOW_MORE}) 


/* Action creators */
export default CatalogReducerGroup2;