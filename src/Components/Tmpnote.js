import { useEffect, useState } from "react";
import { add_todo,update_todo } from "../redux/actions/todoActions";
import {useDispatch } from "react-redux";
import { nanoid } from "nanoid";


const Tmpnote = ({SetEdit,edit})=>{
    // console.log(edit);
const [text,SetText]= useState("");
 const dispatch = useDispatch();

useEffect(()=>{
    if(edit){
        SetText(edit.text);
    }
},[edit]);

 function handleData(){
    if(text.trim().length<=0) return;
     
    if(edit){
       edit.text=text;
       dispatch(update_todo(edit));
      SetEdit(null);
    }
 else{
    let date = new Date();
    let obj = {
        id : nanoid(),
        text: text,
        date:  date.toLocaleDateString()
    }
    dispatch(add_todo(obj));
     }
     SetText("");
 }
    return (
        <div className="note tmpnote">
           <textarea value={text} onChange={(e)=>{SetText(e.target.value)}} rows='8'
				cols='10'
				placeholder='Type to add a note...'
			>
          </textarea>
          <div className="footer">
             <p>  </p>
             <button onClick={handleData} >save</button>
          </div>

        </div>
    )
}
export default Tmpnote;