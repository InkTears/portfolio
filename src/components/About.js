import '../css/about.css'
import Photo from '../assets/photo.jpg'
import { Container, Image, Grid} from 'semantic-ui-react'
import CV from './CV'

export default function About() {
    return (
        <Container as='section' id='about' className='about'>
            <Grid columns={2}>
                <Grid.Row only='tablet mobile' centered>
                    <Grid.Column only='tablet mobile' centered textAlign='center'>
                        <Image id='about-photo' src={Photo} alt="Egor Khaybulov, développeur, web, react" rounded verticalAlign='middle'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={3} only='computer'>
                        <Image id='about-photo' src={Photo} alt="Egor Khaybulov, développeur, web, react" rounded verticalAlign='middle' centered floated='left'/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Container fluid text>
                            <p>
                                Passionné par l'information, j'ai baigné dans les ordinateurs depuis mon adolescence. J'ai assemblé mon premier ordinateur à l'âge de 14 ans et directement j'ai été confronté à des problèmes d'optimisation des performances et de compatibilité que j'ai résolu grâce aux communautés d'internet.<br />
                                Je me suis orienté d'abord vers un bac pro en électrotechnique, dans lequel j'ai découvert le monde du travail grâce à de multiples stages dans des secteurs variés (bâtiments, industriels et tertiaire), malgré un fort intérêt je ne me voyais pas construire une carrière dans ce domaine.<br />
                                <br />
                                C'est pourquoi j'ai décidé de me réorienter vers ma passion de toujours qui est l'informatique et de bâtir une carrière dans le développement web.<br />
                            </p>
                            <CV />
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    )
}
