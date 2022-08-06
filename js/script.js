// Task 1.0
// Select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector('main');
console.log(mainEl);

//Task 1.1
//Set the background color of mainEl
//to the value stored in the --main-bgCSS custom property.
//Hint: Assign a string that uses the CSS var()function like this:
//'var(--main-bg)'

mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Task 1.3
// Add a class of flex-ctrto mainEl.

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
console.log(topMenuEl);

