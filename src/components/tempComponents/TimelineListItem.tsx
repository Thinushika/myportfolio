import React from 'react'
import styles from '@/styles/Home.module.css'

interface ItemProps {
    timeDuration: string;
    position: string;
    location: string;
    desc: string;
}

const TimelineItem: React.FC<ItemProps> = ({timeDuration, position, location, desc }) => {
    return (
        <div className="d-flex flex-column flex-lg-row mb-3">
            <div className="col-12 col-lg-3">
                <p className={`${styles.experienceTime}`} >{timeDuration} </p>
            </div>
            <div className="col-12 col-lg-9">
                <div className="d-flex flex-column flex-lg-row align-items-center">
                <p className={`${styles.experiencePosition} mb-0`} >{position}</p>
                <p className={`px-3 ${styles.experienceLocation} mb-0`}>|</p>
                <p className={`${styles.experienceLocation} mb-0`} >{location}</p>
                </div>
                <p className={`${styles.experienceDetails}`} >{desc}</p>
            </div>
        </div>
    )
}

export default TimelineItem