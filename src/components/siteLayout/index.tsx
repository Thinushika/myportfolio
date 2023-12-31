import Head from 'next/head'
import React, { ReactNode } from 'react'
import styles from '@/styles/Home.module.css'
import Header from './Header';
import Footer from './Footer';
import SideAnimation from '../buttons/SideAnimation';


interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Thinushika</title>
                <meta name="description" content="Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Header />
                <SideAnimation />
                {children}
                <Footer />
            </main>
        </>
    )
}

export default Layout