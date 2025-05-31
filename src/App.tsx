import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import About from './pages/About.tsx'
import NavBar from './components/NavBar.tsx'
import MainPage from './pages/MainPage.tsx'
import Projects from './pages/Projects.tsx'
import Blog from './pages/Blog.tsx'



function App() {
  const [mode, setMode] = useState(0);


  return (
    <div className={
      mode === 0 ? "app-background-dark" : "app-background-light"
    }>
      <NavBar currmode={mode} toggleMode={() => setMode(prev => (prev+1)%2)} />
      <Routes>
        <Route path='/' element={<MainPage currmode={mode}/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
    </div>
  )
}

export default App
