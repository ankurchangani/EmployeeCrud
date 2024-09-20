import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeForm from './components/CrudForm/CrudForm'
import HeaderCrud from './components/Header/HeaderCrud'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderCrud/>
      <EmployeeForm />
    </>
  )
}

export default App
