import '../css/header.css'
import Logo from '../assets/logo.jpg'
import Links from './Links'
import {Container, Image, Header} from "semantic-ui-react";
import { Link } from 'react-router-dom'

export default function SiteHeader() {
    return (
        <Container as='header' textAlign='center' className="header-container">
                <Link to='/'><Image id='header-image' src={Logo} alt="Crow, IA, Generated" size='tiny' circular verticalAlign='middle' centered/></Link>
                <Header as='h1' id='header-name'>EGOR KHAYBULOV</Header>
                <Header as='h2' id='header-title'>Développeur web junior</Header>
                <Links />
        </Container>
    )
}
