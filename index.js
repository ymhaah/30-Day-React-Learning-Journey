// Create a variable and link it to the element you create ( <main id="app"></main> ).
let container = document.querySelector("#app");

// Create a variable and then link it with the first property in React,
//  which is createRoot() and It is common to use words like [ react, root, mainRoot, reactRoot ]
// pass "container" to "createRoot()"
const root = ReactDOM.createRoot(container);

// render() is used to render an element into the root we just create.
root.render(<h1>Hallo, react</h1>);

// ############################################################
// JS vs JSX

// to Create and add an element to DOM using just JS You need to:

// 1- select the parent element.
let father = document.querySelector("#app");

// 2- create the element you want.
let h1 = document.createElement("h1");

// 3- Add the contents of the element.
h1.append("Hallo, react");

// 4- append the element to the parent.
father.append(h1);

// with React:

// just use JSX! with the main root we create
root.render(<h1>Hallo, react</h1>);

// ############################################################

// JSX basics

// link a JSX element to a variable

let myHeading1 = <h1>Hallo, react</h1>;
console.log(myHeading1);

// with jsx
const jsx = <h1 className="greeting">Hello, world!</h1>;
// without jsx
const noJsx = React.createElement(
	"h1",
	{ className: "greeting" },
	"Hello, world!"
);

// using it with a function or if:

if (reactISGood) {
	let myHeading2 = <h1>Hallo, react</h1>;
} else {
	let myHeading2 = <h1>Hallo, vue</h1>;
}

// butting JSX inside an array or an object

let myHeading3 = [<h1>Hallo, react</h1>, <h1>Hallo, vue</h1>];

// the word **"class"** is already taken so we need to use "className" instead

let myHeading4 = <h1 className="veryBigHeading">Hallo, react</h1>;

// write whatever you want to be a JS code inside {}

let bestFramework = "Svelte";
let myHeading5 = <h1 className="veryBigHeading">Hallo, {bestFramework}</h1>;

// a JSX element can contain more than one child,but you can not have more then one element on one variable.

const element1 = (
	<div>
		<ul className="bestFramework">
			<li>Vue</li>
			<li>Svelte</li>
			<li>Remix</li>
		</ul>
	</div>
);

// you do not need the father to be an element it can be a <></>

const element2 = (
	<>
		<ul className="bestFramework">
			<li>Vue</li>
			<li>Svelte</li>
			<li>Remix</li>
		</ul>
	</>
);

// ############################################################

//  Components
