/*
<div id="parent">
<div id="child">
<h1>i am h1 tag</h1>
React Element(Object)=HTML(browser understands)
*/

const heading=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement('h1',{},"I am from h1 tag"),React.createElement('h2',{},"i am from h2 tag")]),
React.createElement("div",{id:"child"},
[React.createElement('h1',{},"I am from h1 tag"),React.createElement('h2',{},"i am from h2 tag")])]);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);
