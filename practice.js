import React from 'react';
import ReactDOM from "react-dom/client";

const jsxHeading=(
    <div id='container'>
        {}
        <h1>Monika</h1>
        <p>learning react seriously</p>
    </div>
)
const element= React.createElement(h1,{id:"title"},"Hi")
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxHeading);


