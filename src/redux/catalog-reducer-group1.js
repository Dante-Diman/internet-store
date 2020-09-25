import img1 from '../assets/catalog/coats/1.jpg';
import img2 from '../assets/catalog/coats/2.jpg';
import img3 from '../assets/catalog/coats/3.jpg';
import img4 from '../assets/catalog/coats/4.jpg';
import img5 from '../assets/catalog/coats/5.jfif';



let initialState ={ 
       
    showMore: false,
    productList:[
        {id:1, productUrl:img1, productTitle:"Coat", productPrice:"80$", productDescription:"Coat-1"  },
        {id:2, productUrl:img2, productTitle:"Coat", productPrice:"90$", productDescription:"Coat-2"  },
        {id:3, productUrl:img3, productTitle:"Coat",productPrice:"100$", productDescription:"Coat-3" },
        {id:4, productUrl:img4, productTitle:"Coat",productPrice:"200$", productDescription:"Coat-4"  },
        {id:5, productUrl:img5, productTitle:"Coat",productPrice:"150$", productDescription:"Coat-5"  }
  
    ],
  
    }
  
        

 const CatalogReducerGroup1 = (state = initialState, action) => {
   
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
const SHOW_MORE= 'SHOW_MORE1';
export const Group_Reducer = () => ({type:SHOW_MORE}) 


/* Action creators */
export default CatalogReducerGroup1;