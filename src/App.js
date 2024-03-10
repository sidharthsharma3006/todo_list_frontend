import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAlltoDo, updateToDo,deleteToDo } from "./utils/HandleApi";
function App() { 
   
  const [toDo,setToDo] = useState([]); 
  const [text,setText] = useState(''); 
  const [isUpdate,setIsUpdate] = useState(false); 
  const [toDoid,setToDoId] = useState("") ;

  useEffect(()=>{
     getAlltoDo(setToDo); 
  },[]) 

  const updateMode = (_id,text)=>{
     setIsUpdate(true); 
     setText(text); 
     setToDoId(_id); 
     console.log("fuck off") 
  }

  return (
   <div className="App">
    <div className="container">
      <h1>ToDo App</h1> 
      <div className="top">
        <input type="text" placeholder="Add ToDo..." value={text} onChange={(e)=>setText(e.target.value)}/>
         <div className="add" onClick={isUpdate?()=>updateToDo(toDoid,text,setToDo,setText,setIsUpdate):()=>addToDo(text,setText,setToDo)}>{isUpdate?"Update":"Add"}</div>
      </div>

     <div className="list">
       {toDo.map((item)=>{
        return <ToDo key={item._id} text={item.text} updateMode={()=> updateMode(item._id,item.text)} deleteToDo={()=> deleteToDo(item._id,setToDo)}/>
       })}
     </div>

    </div>
   </div>
    
  );
}

export default App;
