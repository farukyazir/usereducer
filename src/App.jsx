import React, { useReducer, useState } from 'react'
import Header from './components/Header'
import "./App.css";
import Search from './components/Search';
import Filter from './components/Filter';
import Todo from './components/Todo';
import Reducer from './reducers/Reducers';
const App = () => {
  const initialState = {
    todos:[],
    filter:"All"
  }
  const [state,dispatch]= useReducer(Reducer,initialState)
  console.log(state);
  const filteredtodos = state.todos.filter((todo)=>{
    if(state.filter==="All"){
      return true;}
      return todo.status===state.filter;
    })
  return (
    <div>
      <Header/>
      <Search dispatch={dispatch}/>
      <Filter filter={state.filter}/>
      <div className='todo-list'>
        {
        filteredtodos.map((todo)=>(
          <Todo key={todo.id} 
          todo={todo}
          dispatch={dispatch}         
          />
        ))
      }
      </div>
    </div>
  )
}

export default App
