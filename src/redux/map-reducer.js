let initialState = {
  PointsData: [
        {
    /* Id: "26455f99-2593-429f-a89c-0030dd30d92a",
    Lat: 56.008218,
    Lon: 92.953466,
    FullNumber: "gbus#00000306",
    Description: "СО Красраб 82 СО Красраб Корнетова",
    Type: 2 */
    }
    ],
    LanData:'no data',
    LonData:'no data'
    
}

const mapReducer = (state = initialState, action) => {
       
    switch(action.type){
        case SET_MAP_POINTS :
            return {...state, 
                
                PointsData: action.PointsData};  

    case ADD_POINT :
       return {...state };          
    
       case SELECT_POINT:
        return {...state,
            LanData : action.Lan,
            LonData : action.Lon    

        
        };    

    default :
       return state;      
   }  
}
const SELECT_POINT='SELECT_POINT';
const SET_MAP_POINTS='SET_MAP_POINTS';
const ADD_POINT = 'ADD_POINT';
export const selectPointActionCreator = (Lan,Lon) => ({type: SELECT_POINT , Lan, Lon })
export const setMapPointsActionCreator = (PointsData) => ({type: SET_MAP_POINTS, PointsData})
export const addNewPointActionCreator = () => ({type: ADD_POINT})
export default mapReducer;