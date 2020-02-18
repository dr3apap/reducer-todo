import React from "react";
import styles from "./reducers.module.css";
const Item = props =>{

const {toggleToDo, completed,  todo, dispatch } = props
return(
  <div onClick={() => dispatch({ type:"COMPLETE_TODO" , payload:todo.id})}
  className={`todo ${todo.completed? styles['completed']:""}`}>
  <p>{todo.item}</p>
  </div>
)


}
export default Item;
