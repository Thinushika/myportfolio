import React from 'react'
import styles from '@/styles/Home.module.css'

interface ButtonProps {
    title: string;
    link: string;
  }

const PrimaryButton: React.FC<ButtonProps> = ({ title, link }) =>  {
  return (
      <a className={`${styles.primaryButton} px-4 py-2`} href={link}>{title}</a>
  )
}

export default PrimaryButton