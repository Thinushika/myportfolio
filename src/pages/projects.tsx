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

  useEffect(() => {

  }, []);
  return (
    <>
      <div className="d-flex row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5 align-items-center justify-content-center">
        {
          projects.map((project, index) => {
            return (
              <div className="d-flex mb-4" key={index}>
                <div className={`d-flex col flex-column position-relative  ${styles.cardWrapper}`} >
                <Image src={`${project.thumbnail}`} alt="" width={500} height={300} className='img-fluid' />
                <div className={`d-flex flex-column p-3 ${styles.CardContent} w-100 justify-content-end`}>
                  <Link href={project.slug.current}>{project.title}</Link>
                  <p className='mb-0'>{project.categories}</p>
                </div>
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