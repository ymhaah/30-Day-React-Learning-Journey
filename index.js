// Create a variable and link it to the element you create ( <main id="app"></main> ).
let container = document.querySelector("#app");

// Create a variable and then link it with the first property in React,
//  which is createRoot() and It is common to use words like [ react, root, mainRoot, reactRoot ]
// pass "container" to "createRoot()"
const root = ReactDOM.createRoot(container);

// render() used to render an element into the root we just create.
root.render(<h1>Hallo, react </h1>);
