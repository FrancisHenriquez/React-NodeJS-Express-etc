import React from 'react'
import  './NewGoal.css'

export const NewGoal = props => {
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text:"Jumpshot 23"
        }
        props.onAddGoal(NewGoal);

    }
  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
        <input type = "text" />
        <button type='submit'>Add Goal</button>
    </form>
  )
}
