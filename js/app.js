/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Looping thorugh the sections to get their ID and create list items for the navbar 
for (let i = 0; i < sections.length; i++){;
  const sectionId = sections[i].id;
  // const sectionData = sections[i].getAttribute('data-nav');
  const listItem = document.createElement('li')
  listItem.textContent = sectionId;
  fragment.appendChild(listItem);
  // the size of an element and its position relative to the viewport.
  const viewport = sections[i].getBoundingClientRect();
  console.log(viewport);
}

navList.appendChild(fragment);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


