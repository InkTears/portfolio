import '../css/footer.css'
import {
    Container,
    Divider,
    List,
    Segment,
} from 'semantic-ui-react'
export default function Footer() {
    return (
        <Segment vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>

                <Divider inverted section/>
                <List horizontal inverted divided link size='small'>
                    <List.Item as='a' href='/sitemap.xml'>
                        Site Map
                    </List.Item>
                    <List.Item>
                        <p className='footer_copyright'>© 2023 Egor Khaybulov. Tous droits réservés</p>
                    </List.Item>
                </List>
            </Container>
        </Segment>

    )
}
