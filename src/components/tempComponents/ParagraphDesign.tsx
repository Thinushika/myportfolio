import React from 'react'
import styles from '@/styles/Home.module.css'

interface TitleProps {
    desc: string;
  }

const ParagraphDesign: React.FC<TitleProps> = ({ desc }) =>  {
  return (
      <p className={`${styles.heroPara} py-2`} >{desc}</p>
  )
}

export default ParagraphDesign