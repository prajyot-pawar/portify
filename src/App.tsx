import { useState,useEffect } from 'react'

import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import './App.css'

import MyHomePage from './pages/HomePage';
import LoadingScreen from './pages/LoadingScreen';
import BlogPage from './pages/BlogPage/BlogPage';
import BlogSectionPage from './pages/BlogSectionPage/BlogSectionPage';
import ProjectSectionPage from './pages/ProjectSectionPage/ProjectSectionPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {

  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
  <>
  <Router>
    <Routes>
     <Route path="/portify/" element={isLoading?(
      <LoadingScreen/>):(<MyHomePage/>)}/>
     <Route path="/portify/blogs" element={<BlogSectionPage/>}/>
     <Route path="/portify/blogs/blog" element={<BlogPage/>}/>
     <Route path="/portify/projects" element={<ProjectSectionPage/>}/>
     <Route path="/portify/projects/project" element={<ProjectPage/>}/>
     <Route path="/portify/about" element={<AboutPage/>}/>
     </Routes>
   </Router>   
  </>
     
  
  )
}

export default App
