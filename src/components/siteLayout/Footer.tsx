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
      <div className={`d-flex w-100 flex-column flex-lg-row px-2 px-lg-5 py-2 ${styles.footerStyles}`}>
        <div className="col-12 col-lg-6 d-flex flex-row">
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
        <div className="col-12 col-lg-6"></div>
      </div>
    </>
  )
}

export default Footer