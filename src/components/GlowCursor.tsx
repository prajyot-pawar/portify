import { useEffect, useRef ,MutableRefObject  } from 'react';
import styles from '../assets/css/glowcursor.module.css';


const LightTracker = () => {
  useEffect(() => {
     const handleMouseMove = (e:MouseEvent) => {          
      const light = document.querySelector("#light") as HTMLElement;
       light.style.top = (e.pageY - 250) + "px";
       light.style.left = (e.pageX - 300) + "px";
     };
 
     document.addEventListener('mousemove', handleMouseMove);
 
     return () => {
       document.removeEventListener('mousemove', handleMouseMove);
     };
   }, []);

  return  <div id="light" className="light"></div>
}

export default LightTracker;
