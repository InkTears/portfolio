import '../css/home.css'
import React from "react";
import Header from '../components/Header'
import Projets from '../components/Projets'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Projets />
            <Footer />
        </div>
    )
}
