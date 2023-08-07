import '../css/projets.css'
import React from 'react'
import { Image, Container, Header, Modal, List} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import jsonData from '../data/data'
import {useLocation} from 'react-router-dom';


export default function Projets() {
    const location = useLocation()
    const id = location.pathname.split('/')
    const data = jsonData.find((d) => d.id === id[2]);
    const [open, setOpen] = React.useState(false)
    const Skills = data.skills.split("/");
    let lien = null;
    if(data.lien){
        lien = <p className='projet-temps'>Le projet est visitable sur ce lien :  <Link to={data.lien}>{data.lien}</Link></p>;
    }
    else{
        lien = "Aucun lien n'est disponible pour ce projet";
    }
    return (
        <Container>
            <Image src={`../${data.cover}`} className='projet-cover' size={"medium"} centered />
            <Header as='h1' className='projet-title' textAlign={"center"}>{data.title}</Header>

            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Image src={`../${data.image}`} className='projet-image' size={"medium"} centered/>}
            >
                <Modal.Content image>
                    <Image src={`../${data.image}`} className='projet-image' centered/>
                </Modal.Content>
            </Modal>
            <Container textAlign={"center"}>Cliquer sur l'image pour l'agrandir</Container>

            <Container className='projet-card' text>
                <p className='projet-desc'>{data.description}</p>
                <p className='projet-temps'>Ce projet s'est déroulé sur une période de {data.temps}</p>
                {lien}
                <Header>Compétences acquises</Header>
                <List as='ul'>
                {Skills.map(skill => (
                        <List.Item as='li'>{skill}</List.Item>
                ))}
                </List>
            </Container>
        </Container>
    )
}
