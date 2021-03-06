import {createAction, createReducer} from '@reduxjs/toolkit';

import coat1 from '../assets/catalog/coats/1.jpg';
import coat2 from '../assets/catalog/coats/2.jpg';
import coat3 from '../assets/catalog/coats/3.jpg';
import coat4 from '../assets/catalog/coats/4.jpg';
import coat5 from '../assets/catalog/coats/5.jfif';
import outwear1 from '../assets/catalog/outwear/1.jpg';
import outwear2 from '../assets/catalog/outwear/2.jpg';
import outwear3 from '../assets/catalog/outwear/3.jpg';
import outwear4 from '../assets/catalog/outwear/4.jpg';
import outwear5 from '../assets/catalog/outwear/5.jpg';

import TShort1 from '../assets/catalog/TShorts/1.jpg';
import TShort2 from '../assets/catalog/TShorts/2.jpg';
import TShort3 from '../assets/catalog/TShorts/3.jpg';
import TShort4 from '../assets/catalog/TShorts/4.jpg';
import TShort5 from '../assets/catalog/TShorts/5.jpg';


let initialState ={ 
       

  SearchOptions:{
    
    sizes:[{
      value: 'placeholder',
      label:   'sizes' 
    },
    {
      value: 'low',
      label: '39',
    },
    {
      value: 'middle',
      label: '40',
    },
    {
      value: 'high',
      label: '42',
    },
    {
      value: 'ultra',
      label: '42 or more',
    },],
      
    prices:[{
      value: 'placeholder',
      label:   'prices'   
    },
    {
      value: 'low',
      label: '€20-30',
    },
    {
      value: 'middle',
      label: '€30-50',
    },
    {
      value: 'high',
      label: '€50-100',
    },
    {
      value: 'ultra',
      label: '€100 or more',
    },],
    colors:[{
      value: 'placeholder',
      label:   'colors'    
    },
    {
      value: 'red',
      label: 'red',
    },
    {
      value: 'blue',
      label: 'blue',
    },
    {
      value: 'black',
      label: 'black',
    },
    {
      value: 'other',
      label: 'other',
    },]

},


  
Group1:{
  productGroupTitle:"Coats",
  showMore: false,
  productList:[
    {id:1, productUrl:coat2, productTitle:"Coat", productPrice:"90$", productDescription:"Coat-1" , count:1, sizes:[38,39,40,42]},
    {id:2, productUrl:coat3, productTitle:"Coat",productPrice:"100$", productDescription:"Coat-2" , count:1, sizes:[35,44,40,42]},
    {id:3, productUrl:coat1, productTitle:"Coat", productPrice:"80$", productDescription:"Coat-3" , count:1, sizes:[38,39,40,42]},
    {id:4, productUrl:coat4, productTitle:"Coat",productPrice:"200$", productDescription:"Coat-4" , count:1, sizes:[38,39,40,42]},
    {id:5, productUrl:coat5, productTitle:"Coat",productPrice:"150$", productDescription:"Coat-5" , count:1, sizes:[38,39,40,42]}

  ]
},
Group2:{
productGroupTitle:"outwear",
showMore: false,
productList:[
    {id:6, productUrl:outwear1, productTitle:"outwear", productPrice:"80$", productDescription:"outwear-1" , count:1, sizes:[38,39,40,42]},
    {id:7, productUrl:outwear2, productTitle:"outwear", productPrice:"50$", productDescription:"outwear-2" , count:1, sizes:[38,39,40,42] },
    {id:8, productUrl:outwear3, productTitle:"outwear", productPrice:"40$", productDescription:"outwear-3" , count:1, sizes:[38,39,40,42]},
    {id:9, productUrl:outwear4, productTitle:"outwear", productPrice:"70$", productDescription:"outwear-4" , count:1, sizes:[38,39,40,42]},
    {id:10, productUrl:outwear5, productTitle:"outwear", productPrice:"60$", productDescription:"outwear-5" , count:1, sizes:[38,39,40,42]}

]

},
Group3:{
 productGroupTitle:"TShort",
showMore: false,
productList:[
    {id:11, productUrl:TShort1, productTitle:"TShort", productPrice:"80$", productDescription:"TShort-1" ,count:1, sizes:[38,39,40,42] },
    {id:12, productUrl:TShort2, productTitle:"TShort", productPrice:"50$", productDescription:"TShort-2" ,count:1, sizes:[38,39,40,42] },
    {id:13, productUrl:TShort3, productTitle:"TShort", productPrice:"40$", productDescription:"TShort-3" ,count:1, sizes:[38,39,40,42] },
    {id:14, productUrl:TShort4, productTitle:"TShort", productPrice:"70$", productDescription:"TShort-4" ,count:1, sizes:[38,39,40,42] },
    {id:15, productUrl:TShort5, productTitle:"TShort", productPrice:"60$", productDescription:"TShort-5" ,count:1, sizes:[38,39,40,42] }

],
},
Group4: {
  showMore: false,
  productList:[
    {id:16, productUrl:TShort1, productTitle:"new", productPrice:"0$", productDescription:"Short-1" ,count:1, sizes:[38,39,40,42]},
    {id:17, productUrl:outwear1, productTitle:"new", productPrice:"0$", productDescription:"Short-2" ,count:1, sizes:[38,39,40,42]},
    {id:18, productUrl:outwear3, productTitle:"new", productPrice:"0$", productDescription:"Short-3" ,count:1, sizes:[38,39,40,42]},
    {id:19, productUrl:coat3, productTitle:"new", productPrice:"0$", productDescription:"Short-4" ,count:1, sizes:[38,39,40,42]},
    {id:20, productUrl:coat5, productTitle:"new", productPrice:"0$", productDescription:"Short-5" ,count:1, sizes:[38,39,40,42]}
  ]
  },
    
  
    

  
    }
    export const CatalogReducerGroup1 = createAction('SHOW_MORE1');
    export const CatalogReducerGroup2 = createAction('SHOW_MORE2');
  export const CatalogReducerGroup3 = createAction('SHOW_MORE3');
 export const CatalogReducerGroup4 = createAction('SHOW_MORE4');

  export default createReducer(initialState, {
    [CatalogReducerGroup4]: function (state){
      if (state.Group4.showMore===false) {
        state.Group4.showMore = true
      }
      else{
        state.showMore = false
      }
    
    },
    [CatalogReducerGroup3]: function (state){
      if (state.Group3.showMore===false) {
        state.Group3.showMore = true
      }
      else{
        state.Group3.showMore = false
      }
    
    },
    [CatalogReducerGroup2]: function (state){
      if (state.Group2.showMore===false) {
        state.Group2.showMore = true
      }
      else{
        state.Group2.showMore = false
      }
    
    },
    [CatalogReducerGroup1]: function (state){
      if (state.Group1.showMore===false) {
        state.Group1.showMore = true
      }
      else{
        state.Group1.showMore = false
      }
      
    
    }
  })      

