import { useState,useEffect } from 'react'

import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
// import './App.css'

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

  return (<>
    
  I am react router
  <script src='https://kit.fontawesome.com/a076d05399.js' ></script>
  <Router>
    <Routes>
     <Route path="/" element={isLoading?(
      <LoadingScreen/>):(<MyHomePage/>)}/>
     <Route path="/blogs" element={<BlogSectionPage/>}/>
     <Route path="/blogs/blog" element={<BlogPage/>}/>
     <Route path="/projects" element={<ProjectSectionPage/>}/>
     <Route path="/projects/project" element={<ProjectPage/>}/>
     <Route path="/about" element={<AboutPage/>}/>
     {/* <Route path="/loading" element={<LoadingScreen/>}/>
     <Route path="/consumer" element={<ViewStreamScreen/>}/>
     <Route path="/broadcast" element={<StreamScreen/>}/> */}
     {/* <Route path="/movies" element={<Movies/>}/>
     <Route path="/users" element={<Users />}/>
     <Route path="/add" element={<AddUsers />}/>
     <Route path="/update" element={<UpdateUsers />}/> */}
     </Routes>
   </Router>   
  </>
     
  
  )
}

export default App
