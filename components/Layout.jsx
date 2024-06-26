import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import { Footer } from '.'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>JS Mastery Store</title>
            </Head>
            <header>
                <NavBar />
            </header>
            <main className="main-container">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout