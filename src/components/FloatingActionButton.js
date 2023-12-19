import '../css/header.css'
import {Fab} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link} from "react-router-dom";

export default function FloatingActionButton() {
    return (
        <Link to="/">
            <Fab color="#80808080" aria-label="return">
                <ArrowBackIosNewIcon />
            </Fab>
        </Link>
    )
}
