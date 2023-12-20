import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const About = () => {

  useEffect(() => {

  }, []);


  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items center w-100 p-2 pb-0 pb-lg-5 p-5 py-5 mt-5 text-center">
          <h1 className={`${styles.heroTitle2} mb-0`}><span>About</span></h1>
          <p className={`${styles.heroPara}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex beatae <br></br>autem eum veniam quod ea, iste libero velit dolorem?</p>
    </div>
    </>
  )
}
export default About
