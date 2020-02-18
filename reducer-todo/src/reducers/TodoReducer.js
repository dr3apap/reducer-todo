export const initialState ={
  todos:[
  {
  item:"Learn about reducers",
  completed:false,
  id:6473
},
{
item:'Pick kids up From School',
completed:false,
id:1346
}

]
};
//
// export const TodoReducer = (state, action) => {
// console.log(action.type)
// return state
//
// switch(action.type){
// case'ADD_TODO':
// const newTodo = action.payload
//
// return {...state,
//   todos:[...state.todos, {item:newTodo, comleted:false, id:Date.now()}]
// };
//
// case "CLEAR_TODO":
// // const completed = action.payload
// return{
//   ...state,
// todos:state.todos.filter(item =>( !item.completed))
//
//
// };
//
// case "COMPLETED_TODO":
//
// return{...state,
//   todos: state.todos.map(item =>{
//     if(action.payload === item.id){
//       return {...item, completed:!item.completed}
//     }else{
//       return item
//     }
//   })
//
//
// // default:
// //
// // return state;
//
// }
//
// };
//
// }


export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    case "COMPLETED_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed )
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };
    default:
      return state;
  }
};
