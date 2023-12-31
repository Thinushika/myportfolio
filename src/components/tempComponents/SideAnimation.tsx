import React from 'react'
import styles from '@/styles/Home.module.css'


const SideAnimation = () => {
    return (
        <div className={`${styles.SideAnimation}`}>
            <div className={styles.verticalLine} />
            <div className={styles.verticalLine} />
            <div className={styles.verticalLine} />
            <div className={styles.dot1} />
            <div className={styles.dot2} />
            <div className={styles.dot3} />
        </div>
    )
}

export default SideAnimation