import '../css/work.css'
import datas from '../data/data'
import Card from './Card'
import {Grid, Divider, Container} from 'semantic-ui-react'

export default function Work() {
    return (
        <Container className='work'>
            <Grid columns={3}>
                {datas.map(data => {
                    return (
                        <Grid.Column>
                            <Card
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                cover={data.cover}
                                description={data.description}
                                minidesc={data.minidesc}
                                temps={data.temps}
                                logo={data.logo}
                            />
                            <Divider />
                        </Grid.Column>
                    )
                })}
            </Grid>
        </Container>
    )
}
