import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Zut !</h1>
            <p>La page que vous essayez d'ouvrir n'existe pas, revenez en arrière en cliquant sur le bouton ci-dessous</p>
            <button type="button" onClick="javascript:history.back()">Back</button>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}