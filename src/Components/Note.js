import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector,useDispatch } from 'react-redux';
import { delete_todo,swap_todo } from '../redux/actions/todoActions';
import { useState } from 'react';



const Note = ({SetEdit,edit,item})=>{

    const [noteTheme,SetNoteTheme] = useState({
        backgroundColor:"azure"
    })
  
    let stateArr = useSelector(state=>state); // return redux state
   
    let dispatch = useDispatch();
    function contrlDragStart(e,id){
        e.dataTransfer.setData("parent",id);
        
    }

    function controlOnDrop(e,targetId){
        let dragId =  e.dataTransfer.getData('parent');
     let dragIndex = stateArr.findIndex((item)=> item.id===dragId);
    //  console.log(dragId,targetId);
     let dropIndex = stateArr.findIndex((item)=> item.id===targetId)
    //  console.log(dragIndex,dropIndex);

      dispatch(swap_todo(dragIndex,dropIndex)); // swap the elements in the array
    }
   


    return (
        <div onDragStart={(e)=>{contrlDragStart(e,item.id)}}
         onDragOver={(e)=>{e.preventDefault()}}
         onDrop={(e)=>{controlOnDrop(e,item.id)}}
         draggable
         className="note" style={(edit && edit.id===item.id?{color:"blue",backgroundColor:noteTheme.backgroundColor }:{color:"black",backgroundColor:noteTheme.backgroundColor}) }>
            <div>
                <div className='colors'>
                    <div onClick={()=>{SetNoteTheme({backgroundColor:"yellow"})}} style={{backgroundColor:'yellow'}}></div>
                    <div onClick={()=>{SetNoteTheme({backgroundColor:"grey"})}} style={{backgroundColor:'grey'}} ></div>
                    <div  onClick={()=>{SetNoteTheme({backgroundColor:"azure"})}} style={{backgroundColor:'azure'}} ></div>
               </div> 
               <div className='text-container'>
                      <p className='text'>{item.text}</p>
               </div>  
             
            </div>
         
          <div className="footer">
             <p>{item.date}</p>
             <div className='edit'onClick={()=>{ SetEdit(item)}} ><EditNoteIcon /></div>
             <div className='delete'onClick={()=>{ dispatch(delete_todo(item))}} ><DeleteOutlineIcon/></div>
          </div>
        </div>
    )
}
export default Note;