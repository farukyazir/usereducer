const Reducer = (state,action) => {
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                        id:Date.now(),
                        todoName:action.payload.name,
                        describtion:action.payload.desc,
                        status:"Not Completed"
                    }
                ]
            }
            case "UPDATE_STATUS":
                return{
                    ...state,
                    todos:state.todos.map((todo)=>
                    todo.id===action.payload.todoID ?{...todo,status:action.payload.todoStatus}:todo
                )
                }
                case "DELETE_TODO":
                    return{
                        ...state,
                        todos:state.todos.filter(
                            (todo)=>todo.id !== action.payload
                        )
                    }
                    case "EDIT_TODO":
                      return {
                          ...state,
                          todos:state.todos.map((todo)=>
                            todo.id===action.payload.todoid?{...todo,todoName:action.payload.newName,description:action.payload.newdesc,}:todo)
                               }
                               case "SET_FILTER":
                                return {
                                    ...state,
                                    filter:action.payload
                                }

            default:
                return state
    }
}

export default Reducer
