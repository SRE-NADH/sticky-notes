import Note from "./Note";
import Tmpnote from "./Tmpnote";
import { useSelector } from "react-redux";
import { useState } from "react";

const Notes = ({searchValue})=>{
    const [edit,SetEdit] = useState(null);
    let stateArr = useSelector(state=>state);
    let newArr=stateArr;
    if(searchValue){
     newArr = stateArr.filter((item)=>{ return item.text.toLowerCase().includes(searchValue.toLowerCase()) })
    }

    return (
           <div className="notes">
             <Tmpnote SetEdit={SetEdit} edit={edit} />
              {newArr.map((item)=>(
                 <Note key={item.id} SetEdit={SetEdit} edit={edit} item={item}/>
              ))}
          </div>
    )
}
 export default Notes;