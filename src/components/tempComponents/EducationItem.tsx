import React from 'react'
import styles from '@/styles/Home.module.css'

interface ItemProps {
    timeDuration: string;
    title: string;
    location: string;
    desc: string;
}

const EducationItem: React.FC<ItemProps> = ({timeDuration, title, location, desc }) => {
    return (
        <div className="d-flex flex-column flex-lg-row mb-3">
            <div className="col-12 col-lg-3">
                <p className={`${styles.experienceTime}`} >{timeDuration} </p>
            </div>
            <div className="col-12 col-lg-9">
                <div className="d-flex flex-column align-items-start">
                <p className={`${styles.experiencePosition} mb-0`} >{title}</p>
                <p className={`${styles.experienceLocation} mb-0`} >{location}</p>
                </div>
                <p className={`${styles.experienceDetails}`} >{desc}</p>
            </div>
        </div>
    )
}

export default EducationItem