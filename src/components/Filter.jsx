import React from 'react'

const Filter = ({filter,dispatch}) => {
  return (
    <div className='filter'>
        <label><strong>Filter by Status</strong></label>
        <select value={filter} onChange={(e)=>{
          dispatch({
            type:"SET_FILTER",
            payload:e.target.value
          })
        }}>
            <option>All</option>
            <option>Completed</option>
            <option>Not Completed</option>
        </select>
      
    </div>
  )
}

export default Filter
