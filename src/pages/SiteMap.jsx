import React, {useEffect} from "react";
import Header from '../components/Header'
import Sitemap from '../components/Sitemap'
import Footer from '../components/Footer'

export default function SiteMap() {
    useEffect(() => {
        document.title = "Sitemap WIP";
        document.getElementsByTagName("META")[3].content="Développeur web junior React, PHP, JavaScript";
    }, []);
    return (
        <div className='home'>
            <Header />
            <Sitemap />
            <Footer />
        </div>
    )
}
