
import React from "react";
import ReactDOM from "react-dom/client";

function Title() {
    return (
        <h1>Namaste react JSX!</h1>
    )
}

function HeadingComponent() {
    return (
        <div className="container">
            <Title />
            <h1>Namaste React Functional Componets.</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);