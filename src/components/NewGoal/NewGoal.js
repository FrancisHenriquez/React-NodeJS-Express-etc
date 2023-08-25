import React from 'react'
import  './NewGoal.css'

export const NewGoal = () => {
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text:"Jumpshot 23"
        }
        console.log(newGoal)

    }
  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
        <input type = "text" />
        <button type='submit'>Add Goal</button>
    </form>
  )
}
