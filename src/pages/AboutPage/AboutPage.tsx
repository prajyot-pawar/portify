import { useState, useEffect, CSSProperties, useRef,ChangeEvent} from 'react';
import styles from '../../assets/css/HomePage.module.css'
import sunImage from '../../assets/images/sun 1.png';
import moonImage from '../../assets/svg/moon.svg';
import colorImage from '../../assets/images/go_color.png';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const AboutPage : React.FC = () => {  

  const location = useLocation();
  const prevpagetheme = location.state && location.state.theme;

  const [isMobile, setIsMobile] = useState(false);  
  const [theme, setTheme] = useState<Theme>(prevpagetheme?prevpagetheme:'dark');
  // const [isDark, setIsDark] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDelayed, setIsDelayed] = useState(false);
  const [SocialText, setSocailText] = useState('@');  
  const [FeedBack, setFeedBack] = useState('');  
  
  const mouseCircleRef = useRef<HTMLDivElement | null>(null);
 

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

  const fontStyle:CSSProperties = {
    fontSize: isMobile ? '25px' : '40px',
  };

  const iconStyle:CSSProperties = {
    marginLeft:'10px',
    marginTop: isMobile ?'auto':'auto',
    padding: '10px',
    fontSize: isMobile ? '20px' : '30px',
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


  const handleHover = () => {
    console.log("is hoverred entered");

    setTimeout(() => {
      setIsHovered(true);
      setIsDelayed(true);
      console.log("is hoverred exit");
    }, 5000);
  };

  const handleSubmitFeedback=()=>{
    console.log("This is feedback" + FeedBack);
  }

  const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
    setFeedBack(event.target.value);
    console.log("handleChange is called.");
  }

  const handleHoverEnd = () => {
    setIsHovered(false);
    setIsDelayed(false);
    console.log("is not hoverred")
  };


   const update = (e: MouseEvent | TouchEvent) => {
    const x = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;
    const y = (e as MouseEvent).clientY || (e as TouchEvent).touches[0].clientY;
    const delay= isMobile? 100:150;
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
      <Link to="/portify/" state={{ some: "value" }} className={styles.link}> 
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

<Link to="/portify/" state={{ theme: theme }}>
{ isMobile &&
<div><h3 className={styles.socials_text}>@</h3></div>}

{ !isMobile &&
<div onMouseEnter={() => setSocailText('Socials')}
        onMouseLeave={() =>setSocailText('@')}><h3 className={styles.socials_text}>{SocialText}</h3></div>}
</Link>
</div>
      </div>      
      <div className={styles.aboutsection}>
      <div className={styles.aboutcard}>	
      <div className={styles.flipcontainer}  >
						<div className={isDelayed && isHovered?styles.flipcontainerinner:styles.flipcontainerwithouthover} 
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}>
					<div className={styles.flipcontainerfront}>
					<div className={styles.redStrip}/>
					<div className={styles.flipcontainersign}><u>P.P.P.</u></div>
          <div className={styles.flipcontainerfrontrow}>
          <img src="https://picsum.photos/200/300" alt="My face" content='fill'/>
           
          <div className={styles.flipcontainerfrontrowcolumn}>
            <p>Prajyot Pawar</p>
            <span>Developer</span>
            <div className={styles.flipcontainerfrontrowcolumnconnect}>+ Connect Me on</div>
          </div> 
          </div>
							<div className={styles.flipcontainerfrontcolumnrow}>  
              <a href="https://github.com/Prajyot02"  target="_blank"><i className="fa fa-github" aria-hidden="true" style={fontStyle}></i></a>
              <a href="https://www.linkedin.com/in/prajyot-pawar/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true" style={fontStyle}></i></a>
              <a href="https://www.instagram.com/prajyotp.dev/"target="_blank"><i className="fa fa-instagram" aria-hidden="true" style={fontStyle}></i></a>
              <a href="mailto:prajyotp.dev@gmail.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true" style={fontStyle}></i></a>
              </div>
						</div>
					<div className={styles.flipcontainerback}>
					<div className={styles.redStrip}/>
          <p>Thank You !</p>
          {/* <pre>Drop word for me</pre> */}
          <div className={styles.feedbackribbon}>
            <input type="text"  placeholder="Drop Word for Me..." onChange={handleChange} />
            <i className="fa fa-send-o" aria-hidden="true" style={iconStyle} onClick={handleSubmitFeedback} >
              </i>
              </div>
							<div className={styles.flipcontainerfrontcolumnrow}>  
              <a href="https://github.com/Prajyot02"  target="_blank"><i className="fa fa-github" aria-hidden="true" style={fontStyle}></i></a>
              <a href="https://www.linkedin.com/in/prajyot-pawar/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true" style={fontStyle}></i></a>
              <a href="https://www.instagram.com/prajyotp.dev/"target="_blank"><i className="fa fa-instagram" aria-hidden="true" style={fontStyle}></i></a>
              <a href="mailto:prajyotp.dev@gmail.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true" style={fontStyle}></i></a>
              </div>
          </div>
            
					</div>
				</div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default AboutPage;
