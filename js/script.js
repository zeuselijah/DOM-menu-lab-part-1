// Menu data structure
const menuLinks = [
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
]

// Task 1.0
// Select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector('main');
// console.log(mainEl);

//Task 1.1
//Set the background color of mainEl
//to the value stored in the --main-bgCSS custom property.
//Hint: Assign a string that uses the CSS var()function like this:
//'var(--main-bg)'

mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Task 1.3
// Add a class of flex-ctr to mainEl.

mainEl.classList.add('flex-ctr');
console.log(mainEl);

// Task 2.0
// Select and cache the <nav id="top-menu"> element 
// in a variable named topMenuEl.

const topMenuEl = document.getElementById('top-menu');
//console.log(topMenuEl);

// Task 2.1
// Set the height topMenuElelement to be 100%.

topMenuEl.style.height = "100%";
//console.log(topMenuEl);

//Task 2.2
//Set the background color of topMenuEl 
//to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';


//Task 2.3
//Add a class of flex-around to topMenuEl.

topMenuEl.classList.add('flex-around');


//Task 3.0
//Copy the following data structure to the top of script.js:

/*
Task 3.1
Iterate over the entire menuLinks array and for each "link" object:

Create an <a>element.

On the new element, add an href attribute with its value 
set to the href property of the "link" object.

Set the new element's content to the value 
of the text property of the "link" object.

Append the new element to the topMenuEl element.
*/

menuLinks.forEach(function(ml){
    const elem = document.createElement('a');
    elem.setAttribute('href', ml.href);
    elem.textContent = ml.text;
    topMenuEl.append(elem);

    // Just another way to do it
    // var text = document.createTextNode(ml.text);
    // elem.appendChild(text);
    // topMenuEl.appendChild(elem);
    // console.log(ml);
});

// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

const subMenuEl = document.getElementById('sub-menu');

// Task 4.1
// Set the height subMenuElelement to be 100%.

subMenuEl.style.height = "100%";

// Task 4.2
// Set the background color of subMenuEl
// to the value stored in the --sub-menu-bgCSS custom property.

subMenuEl.style.background = 'var(--sub-menu-bg)';


// Task 4.3
// Add the class of flex-around to the subMenuElelement.

subMenuEl.classList.add('flex-around');


// Task 4.4
// Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position = 'absolute';


// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.top = '0';
console.log(subMenuEl);


// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuEl 
// in a variable named topMenuLinks.

// Declare a global showing SubMenu variable and initialize it to false;

const topMenuLinks = document.querySelectorAll('a');

const subMenu = false;

console.log(topMenuLinks);
console.log(subMenu);