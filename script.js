// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
let mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl.textContent = "SEI Rocks!";

// Task 1.3
// Add a class of flex-ctrto mainEl.
// Hint: Element.classList API
mainEl.classList.add("flex-ctr");

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl
let topMenuEl = document.querySelector("#top-menu");

// Task 2.1
// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = '100%' ;

// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "#0e9aa7";

// Task 2.3
// Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add("flex-around");


var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

for (let i= 0; i< menuLinks.length; i++ ){
  let a = document.createElement('a');
  a.textContent = menuLinks[i].text;
  a.setAttribute('href', menuLinks[i].href);
  topMenuEl.appendChild(a);
}
