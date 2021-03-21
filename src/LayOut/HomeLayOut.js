import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomeLayOut({ children }) {
    return (
        <>
            {/* <Header /> */}<header>header</header>
            {children}
            {/* <Footer /> */}
            <footer>footer</footer>
        </>
    )
}
