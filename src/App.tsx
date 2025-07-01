import { useState } from 'react'
import { Route, Routes, useLocation} from 'react-router-dom'
import './App.css'
import Extras from './pages/Extras.tsx'
import NavBar from './components/NavBar.tsx'
import MainPage from './pages/MainPage.tsx'
import Projects from './pages/Projects.tsx'
import Blog from './pages/Blog.tsx'
import BlogPost from './pages/BlogPost.tsx'

function App() {
  const [mode, setMode] = useState(0);
  const location = useLocation();
  const showNav = location.pathname !== '/';

  return (
    <div className={mode === 0 ? "app-background-dark" : "app-background-light"}>
      {showNav && <NavBar currmode={mode} toggleMode={() => setMode(prev => (prev + 1) % 2)} />}
      <Routes>
        <Route path='/' element={<MainPage currmode={mode} toggleMode={() => setMode(prev => (prev + 1) % 2)} />} />
        <Route path='/About' element={<Extras />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPost currmode={mode} />} />
      </Routes>
    </div>
  );
}


export default App
