import React from 'react'
import NavBar from './components/NavBar'
import ExercisesList from './components/ExercisesList'

const App = () => {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (<>
      <NavBar />
      <ExercisesList />
    </>
)
  }
export default App
