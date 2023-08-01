var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
let mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'
mainEl.style.backgroundColor = "var(--main-bg)";

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
topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "#0e9aa7";

// Task 2.3
// Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add("flex-around");

// var menuLinks = [
//   { text: 'about', href: '/about' },
//   { text: 'catalog', href: '/catalog' },
//   { text: 'orders', href: '/orders' },
//   { text: 'account', href: '/account' },
// ];

for (let i = 0; i < menuLinks.length; i++) {
  let a = document.createElement("a");
  a.textContent = menuLinks[i].text;
  a.setAttribute("href", menuLinks[i].href);
  a.className = "active"; // Task 5.3 add a active class
  topMenuEl.appendChild(a);
}

// Task 4.
let subMenuEl = document.querySelector("#sub-menu");
// Task 4.1
subMenuEl.style.height = "100%";
// Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// Task 4.3
subMenuEl.classList.add("flex-around");
// Task 4.4
subMenuEl.style.position = "absolute";
// Task 4.5
subMenuEl.style.top = 0;

// Task 5.1

let topMenuLinks = document.querySelectorAll("a");
let showingSubMenu = "false";

//Task 5.2

topMenuEl.addEventListener("click", notAClick);
function notAClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    console.log(event.target.text);
  }

  // Task 5.3
  let activeClass = event.target;
  if (activeClass.classList.contains("active")) {
    activeClass.classList.remove("active");
    console.log("Class active has been removed");
    showingSubMenu = "false";
    subMenuEl.style.top = 0;
    return;
  }
}

// Task 5.4
//   Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.

// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

topMenuEl.addEventListener("click", () => {
  let removeEl = document.getElementById("top-menu");
  for (let childEl of removeEl.children) {
    childEl.classList.remove("active");
  }
});

 // Task 5.5
topMenuEl.addEventListener("click", (e) => {
  let displayVal = e.target.text;
  if (e.target instanceof HTMLAnchorElement) {
      e.target.classList.add("active"); 
  }
    let displayValIndex = menuLinks.findIndex((item) => item.text === displayVal);     //Task 5.6
    // console.log(displayValIndex);
    let x = menuLinks[displayValIndex];
    showingSubMenu = x.subLinks ? true : false;
  }
);

// Task 5.7


topMenuEl.addEventListener("click", (e) => {
  let displayVal = e.target.text;
  if (e.target instanceof HTMLAnchorElement) {
    e.target.classList.add("active");
  }
    let displayValIndex = menuLinks.findIndex((item) => item.text === displayVal);     //Task 5.6
    // console.log(displayValIndex);
    let x = menuLinks[displayValIndex];
    showingSubMenu = x.subLinks ? true : false;
        if(showingSubMenu == true){    // Task 5.7
          buildSubMenu(x.subLinks);
     }
     else{
      subMenuEl.style.top = 0;
     }
      function buildSubMenu(subLinks) {
        subMenuEl.style.top = '100%';
      }

});

// Task 5.8
topMenuEl.addEventListener("click", (e) => {
  let displayVal = e.target.text;
  if (e.target instanceof HTMLAnchorElement) {
    e.target.classList.add("active");
    e.target.classList.remove("active")   // Task 6.2
  }
    let displayValIndex = menuLinks.findIndex((item) => item.text === displayVal);     //Task 5.6
    // console.log(displayValIndex);
    let x = menuLinks[displayValIndex];
    showingSubMenu = x.subLinks ? true : false;
        if(showingSubMenu == true){    // Task 5.7
          buildSubMenu(x.subLinks);
     }
     else{
      subMenuEl.style.top = 0;
     }
      function buildSubMenu(subLinks) {
        subMenuEl.style.top = '100%';
        subMenuEl.innerHTML = '';         // Task 5.8
        for(let i= 0; i<subLinks.length; i++ ){
          let a = document.createElement("a");
          a.setAttribute("href", subLinks[i].href);
          a.textContent = subLinks[i].text;
          subMenuEl.appendChild(a);

        }
      }

});

// Task 6.0
// Attach a delegated 'click' event listener to subMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.logthe content of the <a>to verify the handler is working.

subMenuEl.addEventListener('click', e =>{
  e.preventDefault();
  if(e.target instanceof HTMLAnchorElement){
    console.log(e.target )
  }
  else{
    return;
  }
  
})

// Task 6.1
// Next, the event listener should:

// Set showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.

subMenuEl.addEventListener('click', e =>{
  let displayVal1 = e.target.text;
  e.preventDefault();
  if(e.target instanceof HTMLAnchorElement){
    console.log(e.target )}
        // Task 6.3
      mainEl.innerHTML = e.target.innerHTML;
      h1Tag.textContent = mainEl.textContent;
      subMenuEl.appendChild(h1Tag);
   
    showingSubMenu = "false"; // Task 6.1
    subMenuEl.style.top = 0;
    

})


