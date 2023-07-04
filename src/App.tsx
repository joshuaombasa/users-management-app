import { useState } from 'react'
import Star from './components/Star'

interface IState {
  users: {
    name: string
    age: number
    note?: string
  }[]
}

function App() {
 
  const [users, setUsers] = useState<IState["users"]>([
    {name: "Lebron James",
     age : 37,
     note : "All time greatest scorer"},
     {
      name: "Chef Curry",
      age : 35,
      note : "All time greatest shooter"
     }
  ])

  return (
    <>
    <Star users={users} />
    </>
  )
}



export default App
