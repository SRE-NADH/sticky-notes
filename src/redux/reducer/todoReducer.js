import { act } from "@testing-library/react";
import { ADD,DELETE,UPDATE,SWAP,RESET } from "../actions/actionTypes";

let initialState = [];
if(localStorage.getItem('arr')){
   initialState = JSON.parse(localStorage.getItem('arr'));
}



const todoReducer = (state=initialState,actions)=>{
 
    switch(actions.type){
        case ADD : {
            let arr =  [...state,actions.value];
            localStorage.setItem('arr',JSON.stringify(arr));
            return arr;
        }

        case DELETE : {
            let arr = state.filter((item)=>{
              return item.id!=actions.value.id;
            })
            
            localStorage.setItem('arr',JSON.stringify(arr));
            return arr;
        }

        case UPDATE: {

            let index;
            for(let i=0;i<state.length;i++){
                if(actions.value.id==state[i].id){
                    index = i;
                    break;
                }
            }
        let arr = structuredClone(state);
        arr[index] = actions.value;
        
        localStorage.setItem('arr',JSON.stringify(arr));
        return arr;
        }
    case SWAP :{
        let arr = structuredClone(state);
        let tmp = arr[actions.index_1];
        arr[actions.index_1]=arr[actions.index_2];
        arr[actions.index_2]=tmp;
        localStorage.setItem('arr',JSON.stringify(arr));
        return arr;
    }
    case RESET :{
        return initialState;
    }
    default : return state;
    }
}

export default todoReducer;