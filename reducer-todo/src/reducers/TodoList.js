import React, {useState, useReducer} from  "react";
import Item from "./Item"
import {TodoReducer, initialState} from "./TodoReducer";
import styles from "./reducers.module.css"

const TodoList = props =>{

  const[state, dispatch] = useReducer(TodoReducer, initialState )
  const[newTodo, setNewTodo] = useState("")

//   const toggleToDo = () => {
// dispatch({type:"COMPLETE_TODO", payload:todos.id})
//
//
//   // dispatch({type:'TOGGLE_COMPLETED', payload:!completed})
//
//   }


  const clearTodo = ()=>{

dispatch({type:"COMPLETED_TODO"})

  }

  const handleChange = (e) =>{

setNewTodo(e.target.value)


  }

const handleSubmit = e =>{
dispatch({type:'ADD_TODO', payload:newTodo})
e.preventDefault();
setNewTodo("");

}



return(
<div className={styles.formParent}>
      
<h1 className={styles.title}>Add Your To-do List Here!</h1>

  <form onSubmit={handleSubmit}>
<label htmlFor="todo">Todo:
  <textarea className={styles.input} type="text"  id="todo" name="newTodo"
placeholder="Add-Todo" value={newTodo}
onChange={handleChange}>
</textarea>
<button type="submit" onClick={handleSubmit}>Add Item</button>
  </label>
  </form>

{state.todos.map(todo=>(<Item key={todo.id} dispatch={dispatch} todo={todo}/>
))}
<button onClick={clearTodo}>Clear Todo</button>
</div>
)


}
export default TodoList;
