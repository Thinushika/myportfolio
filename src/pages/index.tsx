import { useEffect, useState } from "react";
import { Project } from 'typings';
import { fetchRates } from '../utils/fetchRates'
import { GetStaticProps } from 'next';
import { register } from 'swiper/element/bundle';
import styles from "@/styles/Home.module.css";
import PrimaryButton from "@/components/tempComponents/PrimaryButton";


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
        <div className="col-12 col-lg-8">
          <h2 className={`${styles.heroTitle1} mb-0`}>Hello,</h2>
          <h1 className={`${styles.heroTitle2} mb-0`}>I am <span>Thinushika</span>,</h1>
          <h1 className={`${styles.heroTitle3} mb-0`}>Software Engineer</h1>
          <p className={`${styles.heroPara}`}>I&apos;m a Software Engineer with two years of experience, proficient in Next.js, React, Node.js, and SQL.</p>
          <PrimaryButton title="See my Works" link="/projects" />
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
