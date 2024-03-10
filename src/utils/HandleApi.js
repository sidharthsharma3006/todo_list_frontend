import axios from 'axios' 

const baseUrl = "https://todo-list-backend-n3n3.onrender.com"; 

const getAlltoDo = (setToDo)=>{
    axios.get(baseUrl).then(({data})=>{
        console.log('data--->',data); 
        setToDo(data); 
    })
}  

const addToDo = (text,setText,setToDo)=>{
    
    axios.post(`${baseUrl}/save`,{text}).then((data)=>{
        console.log(data); 
        setText(""); 
        getAlltoDo(setToDo); 
    })

} 

const updateToDo = (toDoId,text,setToDo,setText,setIsUpdate)=>{
    axios.patch(`${baseUrl}/update`,{_id:toDoId,text}).then((data)=>{
        setText(""); 
        setIsUpdate(false); 
        getAlltoDo(setToDo); 
    })
    .catch((err)=>console.log(err)); 
} 

const deleteToDo = (_id,setToDo)=>{
    axios.post(`${baseUrl}/delete`,{_id}).then((data)=>{
        console.log(_id); 
        getAlltoDo(setToDo); 
    })
    .catch((err)=>console.log(err)); 
}

export {getAlltoDo,addToDo,updateToDo,deleteToDo} 
