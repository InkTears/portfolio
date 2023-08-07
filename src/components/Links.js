import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const Links = () => (
    <div>
        <Link to='https://www.linkedin.com/in/egorkhaybulov/' target="_blank">
            <Button color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
            </Button>
        </Link>
        <Link to='https://www.github.com/inktears/' target="_blank">
            <Button color='github'>
                <Icon name='github' /> GitHub
            </Button>
        </Link>
    </div>
)
export default Links
