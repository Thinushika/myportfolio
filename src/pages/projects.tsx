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
      <div className="d-flex flex-column">
        <h1>Hi</h1>
        {
          projects.map((project) => {
            return (
              <>
                <div className="d-flex flex-column">
                  <p>{project.title}</p>
                  <p>{project.name}</p>
                  <p>{project.categories}</p>
                  <Image src={`${project.imageUrl}`} alt="" width={200} height={500} />
                </div>
              </>
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