import React from "react";
import{v4 as uuidv4} from "uuid"

const Form = ( {input, setInput, todos, setTodos }) =>{
const onInputChange = (event) =>{
 setInput(event.target.value);
}
  
const onFormsubmit =(event)=>{
event.preventDefault();
setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
setInput("");

};

    return(
        <form onSubmit={onFormsubmit} >
<input type="text" placeholder="Enter a Todo..." className="task-input" 
value={input}
 onChange={onInputChange}
 required />  
<button className="button-add" type="submit">Add</button>


 </form>

    )
}
export default Form;