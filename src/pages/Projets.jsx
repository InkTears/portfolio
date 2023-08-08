import '../css/home.css'
import React, {useEffect} from "react";
import Header from '../components/Header'
import Projets from '../components/Projets'
import Footer from '../components/Footer'

export default function Home() {
    useEffect(() => {
        document.title = "Projets";
        document.getElementsByTagName("META")[3].content="Développeur web junior React, PHP, JavaScript";
    }, []);
    return (
        <div className='home'>
            <Header />
            <Projets />
            <Footer />
        </div>
    )
}
