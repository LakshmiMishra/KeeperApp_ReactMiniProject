import React ,{useState}from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Collapse from '@material-ui/core/Collapse';
function CreateNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
      });
      const[isexpanded,setIsExpanded]=useState(false);
      function handleClick(event){
        setIsExpanded(true)
      }
      function handleChange(event){
        const {name,value}=event.target;
       
        setNote(prevValue=>{
            if(name==="titleText"){
            
                return {
                    title: value,
                    content: prevValue.content,
                }

            }
            else if(name==="contentText"){

                return {
                    title: prevValue.title,
                    content: value,
                }
            }
        });
      }
function submitNote(event){

    props.onAdd(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault()
  
}
  
      return (
    <div>
    <form> 
    {isexpanded ? <input name="titleText" placeholder="Title" value={note.title} onChange={handleChange} o></input>:null}
    
      <textarea name="contentText" placeholder="Take a note ..." value={note.content} onClick={handleClick} rows={isexpanded? "3":"1"} onChange={handleChange}></textarea>
      <Zoom in={isexpanded}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom> 
      </form>
    </div>
  );
}

export default CreateNote;