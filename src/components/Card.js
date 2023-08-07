import '../css/card.css'
import { Link } from 'react-router-dom'
import { Image, Grid, Header, Icon, Container} from 'semantic-ui-react'

export default function Card({id, title, cover, minidesc, temps, logo}) {
    return (
        <Grid.Column>
            <Link to={`/projets/${id}`}>
                <Container className='projet-card'>
                    <Header as='h3' className='projet-title'>
                        <Icon name={logo}/>
                        <Header.Content>{title}</Header.Content>
                    </Header>
                    <Image src={cover} className='projet-cover' centered/>
                        <p className='projet-desc'>{minidesc}</p>
                        <p className='projet-temps'> Temps : {temps}</p>
                </Container>
            </Link>
        </Grid.Column>
    )
}
