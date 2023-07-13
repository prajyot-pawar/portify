import { useState, useEffect, CSSProperties, useRef } from 'react';
import styles from '../assets/css/herosection.module.css';
import coloursplash from '../assets/images/coloursplash.png';

const HeroSection = () => {   
        return (
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <section  className={styles.divRef}>
              <p className={styles.title_upper} >Myself</p>
              <p className={styles.title} >Prajyot Pawar</p>
              <p className={styles.subtitle} >Computer Engineer</p>              
              <div className={styles.semicircledown}></div>
              </section>
              <section className={styles.divRef}>          
              <div className={styles.semicircleup}></div>
              <p className={styles.subtitle_lower}>A Multipotentialite</p>
              </section>
              <section className={styles.divRef}>
              <p className={styles.description} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              </section>
              <section className={styles.divRef}>
              <p className={styles.description} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              </section>
              <section className={styles.divRef}>
              <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              </section>
              <section className={styles.divRef}>
              <p className={styles.description} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              </section>
              </div>
          </div>
        );
};

export default HeroSection;