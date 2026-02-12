const heading=React.createElement("h1",{},"hello from react");


//nested div
const parent =React.createElement("div",{id:'parent'},
    [React.createElement("div",{id:'child1'},
    [React.createElement('h1',{id:1},"hello children1"),
    React.createElement('h1',{id:2},"hello children1")])],

    React.createElement('div',{id:'child2'},[
    React.createElement('h2',{id:3},"hello children2"),
    React.createElement('h2',{id:3},"hello children2"),
]))


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

