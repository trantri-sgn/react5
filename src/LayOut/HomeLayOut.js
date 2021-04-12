import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login/Login'

export default function HomeLayOut({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Login />
        </>
    )
}
