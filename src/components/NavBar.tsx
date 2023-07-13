// import React from 'react'
// import { useState, useEffect, CSSProperties, useRef } from 'react';
// import { Link } from "react-router-dom";
// import styles from '../assets/css/HomePage.module.css'
// import sunImage from '../assets/images/sun 1.png';
// import moonImage from '../assets/svg/moon.svg';
// import colorImage from '../assets/images/go_color.png';


// const NavBar = () => {
//      const [isMobile, setIsMobile] = useState(false);  
//      const [darkMode, setDarkMode] = useState(true);  
//      const [theme, setTheme] = useState<Theme>('dark');
//      // const [isDark, setIsDark] = useState(true);
     
//      const mouseCircleRef = useRef<HTMLDivElement | null>(null);
//      const delay = 6;
//      let revisedMousePosX = 0;
//      let revisedMousePosY = 0;
   
//      useEffect(() => {
//        const handleResize = () => {
//          setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
//        };
   
//        window.addEventListener('resize', handleResize);
//        handleResize(); // Check initial screen size
   
//        return () => {
//          window.removeEventListener('resize', handleResize);
//        };
//      }, []);   
   
   
//      const toggleTheme = () => {
//        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' || 'colour' : 'light'));
//        console.log("This is theme :" + theme)
//      };
   
   
//      const toggleColourTheme = () => {
//        setTheme(prevTheme => (prevTheme === 'colour' ? 'dark' : 'colour'));
//        console.log("This is theme :" + theme)
//      };
     
//    type Theme = 'light' | 'dark' | 'colour' | 'none';
   
   
//    var divStyles = (theme=='dark') ? styles.htmlLight: styles.htmlDark ;
//    var divStyles = (theme=='colour') ? styles.htmlColorLight: divStyles;
//    if(isMobile==true && divStyles==styles.htmlLight )
//    {divStyles=styles.htmlNone}
//    else
//    {divStyles=divStyles}


//      const navbarstyle :CSSProperties = {
//           width:'100vw',
//           height:'10vh',
//           // backgroundColor:'red',
//           //borderRadius: isMobile ? '4px' : '8px',
//           display:'flex',
//           flexDirection:'row',
//           alignContent:'space-evenly',
//           justifyContent:'space-between',
//           //border: isMobile ? '1px solid black' : '1px solid red',
//         };


//   return (
//   <>
//   <div style={navbarstyle}>
//   <div className={styles.left_nav}>
    
// <Link to="/" state={{ some: "value" }} > 
// <div className={styles.logo_div}>
//   <svg xmlns="http://www.w3.org/2000/svg" width="236" height="332" viewBox="0 0 236 332" fill="none">
// <path d="M8 95C8 46.399 47.3989 7 96 7H112V236C112 284.601 72.6011 324 24 324H8V95Z" fill="#484848"/>
// <path d="M228 95C228 46.3989 188.601 7 140 7H124V135C124 146.046 132.954 155 144 155H228V95Z" fill="#ACAEAB"/>
// </svg> 
// </div></Link>
// <div className={styles.sun_div} onClick={toggleTheme} >
// <img src={theme=='dark'?sunImage:moonImage} alt="Sun" />
// </div>
// </div>
// <div className={styles.right_nav}>
// <div className={styles.colorwheel} onClick={toggleColourTheme}>
// <img src={colorImage} alt="Color" />
// </div>
// { isMobile &&
// <div><h3 className={styles.socials_text}>@</h3></div>}

// { !isMobile &&
// <div><h3 className={styles.socials_text}>Socials</h3></div>}

// </div>
// </div></>
//   )
// }

// export default NavBar