import { useState, useEffect, CSSProperties, useRef } from 'react';
import styles from '../../assets/css/HomePage.module.css'
import stylesprojectsection from './ProjectSectionPage.module.css';
import sunImage from '../../assets/images/sun 1.png';
import moonImage from '../../assets/svg/moon.svg';
import colorImage from '../../assets/images/go_color.png';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


interface projectItem {
  title: string;
  date: string;
  minutes: string;
  content: string;
  imageUrl: string ; 
}


const ProjectSectionPage=  () => {

  const location = useLocation();
  const prevpagetheme = location.state && location.state.theme;

  const [isMobile, setIsMobile] = useState(false);   
  const [projectItems, setprojectItems] = useState<projectItem[]>([]);

  const [theme, setTheme] = useState<Theme>(prevpagetheme);
  // const [isDark, setIsDark] = useState(true);
  
  const mouseCircleRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const parseCSV = async () => {
      try {
        const response = await fetch('/db/projects_data.csv');
        const csvData = await response.text();

        const rows = csvData.split('\n').slice(1); // Exclude header row
        const results: projectItem[] = rows.map((row) => {
          const [title, date, minutes,content,imageUrl] = row.split(',');
          return { title, date, minutes, content,imageUrl };
        });

        setprojectItems(results);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    parseCSV();
  }, []);

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
    console.log("This is theme :" + theme)
  };


  const toggleColourTheme = () => {
    setTheme(prevTheme => (prevTheme === 'colour' ? 'dark' : 'colour'));
    console.log("This is theme :" + theme)
  };
  
type Theme = 'light' | 'dark' | 'colour' | 'none';


var divStyles = (theme=='dark') ? styles.htmlLight: styles.htmlDark ;
var divStyles = (theme=='colour') ? styles.htmlColorLight: divStyles;
if(isMobile==true && divStyles==styles.htmlLight )
{divStyles=styles.htmlNone}
else
{divStyles=divStyles}


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

  
  const projectdivStyle :CSSProperties = {    
    backgroundColor:(theme=== 'colour' && 'light' ) ? '#feffd6' : 'white',
    margin: isMobile?'20px':'30px',
    minHeight: '15vh',
    width: isMobile?'70vw':'50vw',
    padding: '2vh',
    fontSize: isMobile ? '20px' : '40px',
  };



  
  const  pageHeader:CSSProperties = {
    width:'25vw',
    height:'15vh',
    fontSize:isMobile ? '15px':'40px',
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
    textAlign:'center',
    flexDirection:'row',
    // backgroundColor:'red',
    //borderRadius: ,    
    // backgroundColor:(theme=== 'colour' && 'light' ) ? '#e7b11d' : '#505050', 
    color: (theme=== 'colour' && 'light' ) ? '#324597' : '#767676',
    //border: isMobile ? '1px solid black' : '1px solid red',
  };
  
  const projectdivlowerStyle :CSSProperties={
    fontSize:isMobile ? '10px':'20px',
  }
  
  const  pageContent:CSSProperties = {
    width:'100vw',
    height:'82vh',
    // backgroundColor:'red',
    //borderRadius: isMobile ? '4px' : '8px',
    display:'flex',
    flexDirection:'column',
    //border: isMobile ? '1px solid black' : '1px solid red',
  };


   
  const update = (e: MouseEvent | TouchEvent) => {
    const x = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;
    const y = (e as MouseEvent).clientY || (e as TouchEvent).touches[0].clientY;
    setTimeout(() => {      
      document.documentElement.style.setProperty("--cursorX", x + "px");
      document.documentElement.style.setProperty("--cursorY", y + "px");
    }, 200); 
    console.log("what is this" + x + y);
  };

  useEffect(() => {
    document.addEventListener("mousemove", update);
    document.addEventListener("touchmove", update);

    return () => {
      document.removeEventListener("mousemove", update);
      document.removeEventListener("touchmove", update);
    };
  }, []);

  return (
    <div className={divStyles}  ref={mouseCircleRef}>
      {/* <div className='light'></div> */}
    <div style={pageStyle}>      
    {/* <div id='light'></div> */}
      <div style={navbarstyle}>
        <div className={styles.left_nav}>
              
      <Link to="/portify/" state={{ theme: theme }}>
      <div className={styles.logo_div}>
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
{ isMobile &&
<div><h3 className={styles.socials_text}>@</h3></div>}

{ !isMobile &&
<div><h3 className={styles.socials_text}>Socials</h3></div>}

</div>
      </div>
       <div className={stylesprojectsection.header} style={pageHeader}>
  <h1>projects</h1>
</div>   
<div className={stylesprojectsection.line}></div>
       <div style= {pageContent} className={stylesprojectsection.content}>
      {projectItems.slice(0, projectItems.length - 1).map((projectItem, index) => (
      <Link to="/portify/projects/project" state={{ theme: theme , item: projectItem}} className={stylesprojectsection.link}>
        <div key={index} className={stylesprojectsection.projectdiv} style= {projectdivStyle}>
           <div className={stylesprojectsection.project_div_header}>
            <h3>{projectItem.title}</h3>  
            </div>
          <div className={stylesprojectsection.project_div_lower} style={projectdivlowerStyle}>
            <div className={styles.project_div_date}>{projectItem.date} </div>
            <p>{projectItem.minutes}</p>
          </div>
        </div></Link>
      ))}
       </div>
    </div>
      </div>
  );
}

export default ProjectSectionPage