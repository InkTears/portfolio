import React from 'react'
import { Button} from 'semantic-ui-react'
import {Link} from "react-router-dom"
export default function CV() {
    const [isExploding, setIsExploding] = React.useState(true);

    return (
        <Link to="/CV_Egor_Khaybulov.pdf" target="_blank" download>
            <Button
                content='Télécharger mon CV'
                onClick={() => setIsExploding(true)}
                onKeyPress={() => setIsExploding(true)}
            />
        </Link>
    )

}