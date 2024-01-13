import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import { Project } from 'typings';
import { fetchRates } from '../utils/fetchRates'
import { GetStaticProps } from 'next';




type Props = {
  projects: Project[];
}
const Projects = ({ projects }: Props) => {

  console.log("projects: ", projects)

  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = selectedCategory === 'All'
    ? projects
    : projects.filter(item => item.categories.includes(selectedCategory));

  useEffect(() => {

  }, []);
  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items center w-100 p-2 pb-0 pb-lg-5 p-5 py-5 mt-5 text-center">
          <h1 className={`${styles.heroTitle2} mb-0`}><span>Projects</span></h1>
          {/* <p className={`${styles.heroPara}`}>See My Works</p> */}
    </div>
    <div className="d-flex flex-row pt-5 mt-5 w-100 justify-content-center" >
        <button
          onClick={() => setSelectedCategory('All')}
          className={`${selectedCategory === 'All' ? 'activeCategory' : ''} categoryButton talkButtonSize me-2 ${styles.primaryButton} px-4 py-2`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory('Web Development')}
          className={`${selectedCategory === 'Web Development' ? 'activeCategory' : ''} categoryButton talkButtonSize me-2 ${styles.primaryButton} px-4 py-2`}
        >
          Web Development
        </button>
        <button
          onClick={() => setSelectedCategory('Next.js')}
          className={`${selectedCategory === 'Next.js' ? 'activeCategory' : ''} categoryButton talkButtonSize me-2 ${styles.primaryButton} px-4 py-2`}
        >
          Next.js
        </button>
        <button
          onClick={() => setSelectedCategory('Html')}
          className={`${selectedCategory === 'Html' ? 'activeCategory' : ''} categoryButton talkButtonSize ${styles.primaryButton} px-4 py-2`}
        >
          Html
        </button>
      </div>
      <div className={`d-flex row row-cols-1 row-cols-md-2 row-cols-lg-3 pb-2 py-lg-5 align-items-center justify-content-center ${styles.sideSpacing}`}>
        {
          filteredProducts.sort((a, b) => b.order_id - a.order_id).map((project, index) => {
            return ( 
              <div className="d-flex mb-4" key={index}>
                <div className={`d-flex col flex-column position-relative  ${styles.cardWrapper}`} >
                <Link href={project.slug.current}>
                  <Image src={`${project.thumbnail}`} alt="" width={500} height={300} className='img-fluid' />
                </Link>
              </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
export default Projects

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects: Project[] = await fetchRates();

  return {
    props: {
      projects
    },
    revalidate: 10,
  }
}