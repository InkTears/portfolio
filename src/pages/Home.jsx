import '../css/home.css'
import Header2 from '../components/Header'
import About from '../components/About'
import Work from '../components/Work'
import Footer from '../components/Footer'
import {Divider,Header} from 'semantic-ui-react'
import React from "react";

export default function Home() {
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
