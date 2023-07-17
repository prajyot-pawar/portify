import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import MyHomePage from './pages/HomePage.tsx'
// import BlogSectionPage from './pages/BlogSectionPage/BlogSectionPage.tsx'
// import BlogPage from './pages/BlogPage/BlogPage.tsx'
// import ProjectSectionPage from './pages/ProjectSectionPage/ProjectSectionPage.tsx'
// import ProjectPage from './pages/ProjectPage/ProjectPage.tsx'
// import AboutPage from './pages/AboutPage/AboutPage.tsx'

// const router= createBrowserRouter([
//   {
//     path : "/portify/",
//     element:<App/>,
//     children:[
//       {
//         path: "/portify/",
//         element:<MyHomePage/>,
//       },      
//       {
//         path: "/portify/blogs",
//         element:<BlogSectionPage/>,
//       },      
//       {
//         path: "/portify/blogs/blog",
//         element:<BlogPage/>,
//       },
//       {
//         path: "/portify/projects",
//         element:<ProjectSectionPage/>,
//       },
//       {
//         path: "/portify/projects/project",
//         element:<ProjectPage/>,
//       },
//       {
//         path: "/portify/about",
//         element:<AboutPage/>,
//       },
//     ]
//   }
// ]
// )

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>    
    <App/>
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>,
)
