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