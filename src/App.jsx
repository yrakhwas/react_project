import './App.css'
import Timer from './components/timer'
import UserCard from './components/userCard'
import UserList from './components/userList'

function App() {

  const USERS = [
    { id:"1", name: "Yurii", address: "Rivne, Ukraine", position: "Teacher", color: "Red" },
    { id:"2",name: "Vitalik", address: "Kostopil, Ukraine", position: "Student", color: "Green" },
    { id:"3",name: "Jenya", address: "Dzhmelivka, Ukraine", position: "Pupil", color: "Orange" },
    { id:"4",name: "Mihailo", address: "Verhivsk, Ukraine", position: "Student" },
    { id:"5",name: "Oleg", address: "Kyiv, Ukraine", position: "Developer", color: "Blue" },
    { id:"6",name: "Olena", address: "Lviv, Ukraine", position: "Designer", color: "Purple" }

  ]
  return (
    <div>
      {/* <UserCard name="Yurii" adress="Rivne, Ukraine" position="Teacher" color="Red"/>
      <UserCard name="Vitalik" adress="Kostopil, Ukraine" position="Student" color="Green"/>
      <UserCard name="Jenya" adress="Dzhmelivka, Ukraine" position="Pupil" color="Orange"/>
      <UserCard name="Mihailo" adress="Verhivsk, Ukraine" position="Student"/> */}

        <UserList users={USERS}/>
      <Timer start="30"/>
      <Timer start="7"/>
    </div>
  )
}

export default App
