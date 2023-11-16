

import {ADD,DELETE,UPDATE,RESET, SWAP} from "./actionTypes";


export const add_todo=(element)=>{
    
    return {
        type:ADD,
        value:element
    }
}

export const delete_todo=(element)=>{
    
    return {
        type: DELETE,
        value:element
    }
}

export const update_todo=(element)=>{
    
    return {
        type: UPDATE,
        value:element
    }
}

export const swap_todo=(index1,index2)=>{
    
    return {
        type: SWAP,
        index_1:index1,
        index_2:index2
    }
}

export const reset = ()=>{
    return {
        type:RESET
    }
}