import { Inter } from "next/font/google";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsPlayCircle,
} from "react-icons/bs";

import { Project } from 'typings';
import { fetchRates } from '../utils/fetchRates'
import { GetStaticProps } from 'next';

import { register } from 'swiper/element/bundle';

import lightStyles from "@/styles//Light.module.css";
import darkStyles from "@/styles//Dark.module.css";
import styles from "@/styles/Home.module.css";
import PrimaryButton from "@/components/buttons/PrimaryButton";


register();

type Props = {
  projects: Project[];
}


export default function Home({ projects }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);


  useEffect(() => {
    console.log("Active : ", activeSlide);
  }, [activeSlide]);

  useEffect(() => {

  }, []);

  return (
    <>
      <div className={`d-flex flex-column justify-content-center align-items-end p-0 m-0 position-relative ${styles.homeSliderWrapper} ${styles.backgroundAnimation}`}>
          <div className={styles.verticalLine} />
          <div className={styles.verticalLine} />
          <div className={styles.verticalLine} />
          <div className={styles.dot1} />
          <div className={styles.dot2} />
          <div className={styles.dot3} />

        <div className="col-12 col-lg-8">
          <h2 className={`${styles.heroTitle1}`}>Hello,</h2>
          <h1 className={`${styles.heroTitle2}`}>I am <span>Thinushika</span>,</h1>
          <h1 className={`${styles.heroTitle3}`}>Full-Stack Developer</h1>
          <p className={`${styles.heroPara}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex beatae <br></br>autem eum veniam quod ea, iste libero velit dolorem?</p>
          <PrimaryButton title="Get in Touch" link="mailto:thinupavani@gmail.com" />
        </div>
      </div>
    </>
  )
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects: Project[] = await fetchRates();

  return {
    props: {
      projects
    },
    revalidate: 10,
  }
}
