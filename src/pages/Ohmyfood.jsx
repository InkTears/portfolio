import '../css/home.css'
import '../css/iframes.css'
import React, {useEffect} from "react";
import FloatingActionButton from '../components/FloatingActionButton'
import Ohmyfood from "../components/Ohmyfood";

export default function PageOhmyfood() {
    useEffect(() => {
        document.title = "Projets";
        document.getElementsByTagName("META")[3].content="Développeur web junior, React, PHP, JavaScript, Typescript";
    }, []);
    return (
        <div className='OhmyfoodMain'>
            <FloatingActionButton />
            <Ohmyfood />
        </div>
    )
}
