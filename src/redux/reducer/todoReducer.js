import { act } from "@testing-library/react";
import { ADD,DELETE,UPDATE,SWAP,RESET } from "../actions/actionTypes";


const initialState = [];


const todoReducer = (state=initialState,actions)=>{
 
    switch(actions.type){
        case ADD : {
            return [...state,actions.value];
        }

        case DELETE : {
            return state.filter((item)=>{
              return item.id!=actions.value.id;
            })
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
        return arr;
        }
    case SWAP :{
        let arr = structuredClone(state);
        let tmp = arr[actions.index_1];
        arr[actions.index_1]=arr[actions.index_2];
        arr[actions.index_2]=tmp;
        return arr;
    }
    case RESET :{
        return initialState;
    }
    default : return state;
    }
}

export default todoReducer;