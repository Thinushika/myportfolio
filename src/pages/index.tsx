import { useEffect, useState } from "react";
import { Project } from 'typings';
import { fetchRates } from '../utils/fetchRates'
import { GetStaticProps } from 'next';
import { register } from 'swiper/element/bundle';
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

  

  return (
    <>
    {/* hero section */}
      <div className={`d-flex flex-column justify-content-center align-items-end p-0 m-0 position-relative ${styles.homeSliderWrapper} ${styles.backgroundAnimation}`}>
          <div className={styles.verticalLine} />
          <div className={styles.verticalLine} />
          <div className={styles.verticalLine} />
          <div className={styles.dot1} />
          <div className={styles.dot2} />
          <div className={styles.dot3} />

        <div className="col-12 col-lg-8">
          <h2 className={`${styles.heroTitle1} mb-0`}>Hello,</h2>
          <h1 className={`${styles.heroTitle2} mb-0`}>I am <span>Thinushika</span>,</h1>
          <h1 className={`${styles.heroTitle3} mb-0`}>Full-Stack Developer</h1>
          <p className={`${styles.heroPara}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex beatae <br></br>autem eum veniam quod ea, iste libero velit dolorem?</p>
          <PrimaryButton title="Get in Touch" link="mailto:thinupavani@gmail.com" />
        </div>

      </div>

      {/* Skills */}

      {/* experience */}
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
