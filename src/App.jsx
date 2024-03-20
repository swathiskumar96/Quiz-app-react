import { Route, Routes } from 'react-router-dom'
import './App.css'
import Quiz from './components/Quiz'
import Home from './components/Home'
import Header from './components/Header'


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/quiz' element={<Quiz/>}></Route>
      <Route path='/header' element={<Header/>}></Route>
          </Routes>
    </>
  )
}

export default App
