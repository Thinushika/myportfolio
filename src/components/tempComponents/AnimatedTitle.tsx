import React from 'react'
import styles from '@/styles/Home.module.css'

interface TitleProps {
    title: string;
  }

const AnimatedTitle: React.FC<TitleProps> = ({ title }) =>  {
  return (
      <h3 className={`${styles.AnimatedTitle} py-2 mb-3`} >{title}</h3>
  )
}

export default AnimatedTitle