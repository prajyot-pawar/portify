import { useState, useEffect, CSSProperties, useRef } from 'react';
import styles from '../assets/css/HomePage.module.css'
import sunImage from '../assets/images/sun 1.png';
import moonImage from '../assets/svg/moon.svg';
import colorImage from '../assets/images/go_color.png';
import { Link } from "react-router-dom";
import HeroSection from '../components/HeroSection';
import { useLocation } from 'react-router-dom';


const MyHomePage : React.FC = () => {  

  const location = useLocation();
  const prevpagetheme = location.state && location.state.theme;

  const [isMobile, setIsMobile] = useState(false);  
  const [theme, setTheme] = useState<Theme>(prevpagetheme?prevpagetheme:'dark');
  // const [isDark, setIsDark] = useState(true);
  
  const mouseCircleRef = useRef<HTMLDivElement | null>(null);
 
  const [SocialText, setSocailText] = useState('@');  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);   


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' || 'colour' : 'light'));
    // console.log("This is theme :" + theme)
  };


  const toggleColourTheme = () => {
    setTheme(prevTheme => (prevTheme === 'colour' ? 'dark' : 'colour'));
    // console.log("This is theme :" + theme)
  };
  
type Theme = 'light' | 'dark' | 'colour' | 'none';


var divStyles = (theme=='dark') ? styles.htmlLight: styles.htmlDark ;
var divStyles = (theme=='colour') ? styles.htmlColorLight: divStyles;
if(isMobile==true && divStyles==styles.htmlLight )
{divStyles=styles.htmlNone}
else
{divStyles=divStyles}

  // const themeClasses: { [key in 'light' | 'dark']: string } = {
  //   dark: styles1.themedark,
  //   light: styles1.themelight,
  // };

  const pageStyle:CSSProperties = {
    backgroundColor:(theme=== 'colour' && 'light' ) ? '#feffd6	' : 'white',    
    maxHeight: '100vh', 
    width: '100vw',
    display: 'flex',    
    alignItems: 'center',    
    flexDirection: 'column' ,
    justifyContent: 'flex-start',
    fontSize: isMobile ? '18px' : '24px',
  };

  const navbarstyle :CSSProperties = {
    width:'100vw',
    height:'10vh',
    // backgroundColor:'red',
    //borderRadius: isMobile ? '4px' : '8px',
    display:'flex',
    flexDirection:'row',
    alignContent:'space-evenly',
    justifyContent:'space-between',
    //border: isMobile ? '1px solid black' : '1px solid red',
  };

  // const herosectionstyle :CSSProperties = {
  //    width:'100vw',
  //    height:'60vh',
  //    color:'#484848',
  //    //borderRadius: isMobile ? '4px' : '8px',
  //    //border: isMobile ? '1px solid black' : '1px solid red',
  //    display: 'flex' ,
  //    flexDirection:'column',
  //    padding:'0px',
  //    alignItems: 'center',
  //    justifyContent:'center'
  //  };
   


   const bottomnavbarstyle :CSSProperties = {
    backgroundColor: (theme=== 'colour' && 'light' ) ? '#transparent' : 'transparent',
     width:'100vw',
     height:isMobile?'40vh':'30vh',
     display:'flex',
     //borderRadius: isMobile ? '4px' :'8px',
     //border: '1px solid red',
   };
   

 const blogsectionstyle :CSSProperties = {
    backgroundColor:(theme=== 'colour' && 'light' ) ? '#eec962' : '#767676',
     width:'50vw',
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
     height:isMobile?'40vh':'30vh',
     //border: '1px solid red',    
   };

   const projectsectionstyle :CSSProperties = {
    backgroundColor: (theme=== 'colour' && 'light' ) ? '#324597' : '#D9D9D9',  
     width:'50vw',
     height:isMobile?'40vh':'30vh',
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
     //border: '1px solid red',
     color:'#FFFFFF',     
   };

  //  const rootStyles = {
  //   // Define your styles here
  //   cursor: "none",
  //   "--cursorX": "50vw",
  //   "--cursorY": "50vh",
  // };

   const update = (e: MouseEvent | TouchEvent) => {
    const x = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;
    const y = (e as MouseEvent).clientY || (e as TouchEvent).touches[0].clientY;
    const delay= isMobile? 50:150;
    setTimeout(() => {      
      document.documentElement.style.setProperty("--cursorX", x + "px");
      document.documentElement.style.setProperty("--cursorY", y + "px");
    }, delay); 
    // console.log("what is this" + x + y);
  };
  
  {
  useEffect(() => {
    document.addEventListener("mousemove", update);
    document.addEventListener("touchmove", update);

    return () => {
      document.removeEventListener("mousemove", update);
      document.removeEventListener("touchmove", update);
    };
  }, []);
}

  


  return (
    <div className={divStyles}  ref={mouseCircleRef}>
      {/* <div className='light'></div> */}
    <div style={pageStyle}>      
    {/* <div id='light'></div> */}
      <div style={navbarstyle}>
        <div className={styles.left_nav}>          
      <Link to="/" state={{ some: "value" }} className={styles.link}> 
      <div className={styles.logo_div} >
       {(theme=='colour')?     
       <svg width="236" height="332" viewBox="0 0 236 332" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 95C8 46.399 47.3989 7 96 7H112V236C112 284.601 72.6011 324 24 324H8V95Z" fill="#26D973"/>
        <path d="M228 95C228 46.3989 188.601 7 140 7H124V135C124 146.046 132.954 155 144 155H228V95Z" fill="#268CD9"/>
        </svg>:
        <svg xmlns="http://www.w3.org/2000/svg" width="236" height="332" viewBox="0 0 236 332" fill="none">
          <path d="M8 95C8 46.399 47.3989 7 96 7H112V236C112 284.601 72.6011 324 24 324H8V95Z" fill="#484848"/>
          <path d="M228 95C228 46.3989 188.601 7 140 7H124V135C124 146.046 132.954 155 144 155H228V95Z" fill="#ACAEAB"/>
          </svg>
          }
          </div>
          </Link>
          <div className={styles.sun_div} onClick={toggleTheme} >
<img src={theme=='dark'?sunImage:moonImage} alt="Sun" />
</div>
</div>
<div className={styles.right_nav}>
<div className={styles.colorwheel} onClick={toggleColourTheme}>
<img src={colorImage} alt="Color" />
</div>

<Link to="/about" state={{ some: "value" }} className={styles.link}> 
{ isMobile &&
<div><h3 className={styles.socials_text}>@</h3></div>}

{ !isMobile &&
<div onMouseEnter={() => setSocailText('Socials')}
        onMouseLeave={() =>setSocailText('@')} className={SocialText=='@'?styles.zoomed:styles.unzoomed}><h3 className={styles.socials_text}>{SocialText}</h3></div>}
</Link>
</div>
      </div>
      <HeroSection/>
      {/* <div style={herosectionstyle}>
      <p className={styles.title_upper}>Myself</p>  
      <p className={styles.title}>Prajyot Pawar</p>  
      <p className={styles.subtitle}>Computer Engineering Student</p>
      <p className={styles.subtit le_lower}>A multipotentialite</p>
      </div> */}
      <div style={bottomnavbarstyle}>   
      <Link to="/blogs" state={{ theme: theme }} className={styles.link}> 
      <div style={blogsectionstyle} className={styles.blogSection}>
          <p className={(theme=='colour')?styles.blog_section_color:styles.blog_section}>Blogs</p>  
         </div>
          </Link>             
      <Link to="/projects" state={{ theme: theme }} className={styles.link}> 
        <div style={projectsectionstyle} className={styles.projectsSection}> 
          <p className={(theme=='colour')?styles.projects_section_color:styles.projects_section}>Projects</p> 
          </div>
          </Link> 
      </div> 
      </div>
      </div>
  );
};

export default MyHomePage;
