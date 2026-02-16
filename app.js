import React from 'react';
import ReactDOM from "react-dom/client";


const heading=React.createElement("h1",{},"hello from react");


//nested div
const parent = React.createElement("div",{id:'parent'},
    [React.createElement("div",{key:0},
    [React.createElement('h1',{key:1},"hello Monika"),
    React.createElement('h1',{key:2},"hello children1")])],

    React.createElement('div',{key:3},[
    React.createElement('h2',{key:4},"hello children2"),
    React.createElement('h2',{key:5},"hello children2"),
]))

// jsx is not html its a html like syntax
const jsxHeading=<h1 id='heading'>Namaste monika</h1>;
console.log(jsxHeading)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);





