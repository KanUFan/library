import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page">
            <h1>Нет такой страницы</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}
