import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

interface ButtonProps {
    title: string;
    link: string;
  }

const PrimaryButton: React.FC<ButtonProps> = ({ title, link }) =>  {
  return (
      <Link className={`${styles.primaryButton} px-4 py-2`} href={link}>{title}</Link>
  )
}

export default PrimaryButton