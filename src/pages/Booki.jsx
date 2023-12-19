import '../css/home.css'
import '../css/iframes.css'
import React, {useEffect} from "react";
import FloatingActionButton from '../components/FloatingActionButton'
import Booki from "../components/Booki";

export default function PageBooki() {
    useEffect(() => {
        document.title = "Projets";
        document.getElementsByTagName("META")[3].content="Développeur web junior, React, PHP, JavaScript, Typescript";
    }, []);
    return (
        <div className='BookiMain'>
            <FloatingActionButton />
            <Booki />
        </div>
    )
}
