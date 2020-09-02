
/* 
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';
 */


let initialState ={ 
    tarifs : {
        baseTarif : {id : 1, tarifLabel : 'Base', price: 1000 , 
                services:[
                    'delivery',
                    'Support',
                    'Public ralations',
                    'Termination of concurents'
                ],   
        tarifColor:'#118def',
        nameServises:'Надежный'
        },

        standartTarif: {id : 2, tarifLabel : 'Standart', price: 2000 ,   
             services:[
                'delivery2',
               'Support2',
                'Public ralations2',
           ], 
        tarifColor:'#ff4b68',
        nameServises:'И так сойдет'
    },

        premiumTarif:  {id : 3, tarifLabel : 'Premium', price: 3000 ,   
             services:[
                'delivery3',
               'Support3',
                'Public ralations3',
                ], 
        tarifColor:'#118def',
        nameServises:'У христа за пазухой'
    }
            },
    selectedTarif:'не выбран',
    
    
   
    

}  

 const priceListReducer = (state = initialState, action) => {
   
    switch(action.type){

        case TARIF_SELECTED:
               
               return {...state,
                selectedTarif : action.newTarif };  
                
                      
            default :
                return state;
        } 
    
        

 }
/* Action creators */
const TARIF_SELECTED = 'TARIF_SELECTED';
export const setSelectedTarif = (newTarif) => ({type:TARIF_SELECTED , newTarif}) 
/* export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text  })  */  
/* Action creators */
export default priceListReducer;