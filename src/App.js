// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {GoalList }from  './components/GoalList/GoalList'
import { NewGoal } from './components/NewGoal/NewGoal';

function App() {

  const [courseGoals, setCourseGoals] = useState ([
    {id:'cg1' , text: 'Finish the Course'},
    {id:'cg2' , text: 'How do you know? HOW DO YOU KNOW!?'},
    {id:'cg3' , text: 'There shall be ragnarok'}
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal)); 
    setCourseGoals((prevCourseGoal) => {
      return prevCourseGoal.concat(newGoal);
    });

  };

  return (
    <div>
    
    <h2 className='course-goals h2'>Course Goal</h2>
    <NewGoal onAddGoal ={addNewGoalHandler}/>
   <GoalList goals = {courseGoals}/>
    
    </div>
   
  );
}

export default App;
