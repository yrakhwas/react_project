import './App.css'
import Timer from './components/timer'
import UserCard from './components/userCard'
import UserList from './components/userList'

function App() {

  const USERS = [
    { name: "Yurii", address: "Rivne, Ukraine", position: "Teacher", color: "Red" },
    { name: "Vitalik", address: "Kostopil, Ukraine", position: "Student", color: "Green" },
    { name: "Jenya", address: "Dzhmelivka, Ukraine", position: "Pupil", color: "Orange" },
    { name: "Mihailo", address: "Verhivsk, Ukraine", position: "Student" },
    { name: "Oleg", address: "Kyiv, Ukraine", position: "Developer", color: "Blue" },
    { name: "Olena", address: "Lviv, Ukraine", position: "Designer", color: "Purple" }

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
