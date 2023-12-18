import React from 'react'
import styles from '@/styles/Home.module.css'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {


  const socialMedia = [
    {
      Id: 1,
      icon: <FaInstagram />,
      link: "#"
    },
    {
      Id: 2,
      icon: <FaFacebook />,
      link: "#"
    },
    {
      Id: 3,
      icon: <FaTwitter />,
      link: "#"
    },
    {
      Id: 4,
      icon: <FaPinterest />,
      link: "#"
    }
  ]


  return (
    <>
      <div className={`d-flex justify-content-center px-2 py-2 ${styles.footerStyles}`}>
        <div className={`d-flex flex-column ${styles.containerFooter} align-items-center justify-content-center`}>
          {
            socialMedia.map((item)=>{
              return(
                <div key={item.Id} className={`${styles.footerIconWrapper} d-flex flex-row justify-content-center align-items-center`}>
                  <Link  href={item.link} className='mb-0'>{item.icon}</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Footer