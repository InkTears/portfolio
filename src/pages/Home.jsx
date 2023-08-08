import '../css/home.css'
import Header2 from '../components/Header'
import About from '../components/About'
import Work from '../components/Work'
import Footer from '../components/Footer'
import {Divider,Header} from 'semantic-ui-react'
import React, { useEffect} from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Portfolio de Egor Khaybulov";
        document.getElementsByTagName("META")[3].content="Développeur web junior React, PHP, JavaScript";
    }, []);
    return (
        <div className='home'>
            <Header2 />
            <Divider horizontal>
                <Header as='h2'>
                    À propos de moi
                </Header>
            </Divider>
            <About />
            <Divider horizontal>
                <Header as='h2'>
                    Mes projets réalisés
                </Header>
            </Divider>
            <Work />
            <Footer />
        </div>
    )
}
