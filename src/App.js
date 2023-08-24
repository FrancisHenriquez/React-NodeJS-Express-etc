// import logo from './logo.svg';
import './App.css';
import {GoalList }from  './components/GoalList'


function App() {

  const courseGoals = [
    {id:'cg1' , text: 'Finish the Course'},
    {id:'cg2' , text: 'How do you know? HOW DO YOU KNOW!?'},
    {id:'cg3' , text: 'There shall be ragnarok'}
  ];
  return (
    <div>
    
    <h2 className='course-goals h2'>Course Goal</h2>
   <GoalList goals = {courseGoals}/>
    
    </div>
   
  );
}

export default App;
