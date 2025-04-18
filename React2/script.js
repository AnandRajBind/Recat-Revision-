
// var h1=document.createElement('h1')
// var root=document.querySelector('#root')

// h1.innerHTML='Hello hfj World'

// root.appendChild(h1);
// console.log(h1);


var h1 = React.createElement('h1', null, 'Hello React World');// create a react element
var parent = document.querySelector('#parent')
// console.log(parent);

var root = ReactDOM.createRoot(parent)// create a root for the react component

root.render(h1)// render the react component to the DOM