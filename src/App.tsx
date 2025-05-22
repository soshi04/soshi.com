import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import About from './pages/About.tsx'
import NavBar from './components/NavBar.tsx'
import MainPage from './pages/MainPage.tsx'
import Projects from './pages/Projects.tsx'



function App() {
  const [mode, setMode] = useState(0);


  return (
    <div className={
      mode === 0 ? "app-background-dark" :
      mode === 1 ? "app-background-light" :
      "app-background-cream"
    }>
      <NavBar currmode={mode} toggleMode={() => setMode(prev => (prev+1)%3)} />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App
