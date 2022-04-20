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

// Function to test if the element is in the view port or not.
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Looping thorugh the sections to get their ID and create list items for the navbar 
sections.forEach(section =>{
  const sectionId = section.id;
  const sectionHeader = section.querySelector('h2');
  const sectionData = section.getAttribute('data-nav');
  const listItem = document.createElement('li')
  listItem.innerHTML = `<a href='#${sectionId}' data-nav='${sectionData}' class='menu__link'>${sectionHeader.textContent}</a>`;
  fragment.appendChild(listItem);
})
// build the nav
navList.appendChild(fragment);

// Check if the section is in the view port to add active class
window.addEventListener('scroll', function(){
  sections.forEach(section => {
    if (isInViewport(section)){
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  })
} )

// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll('.menu__link');
links.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const dataNav = e.target.getAttribute('data-nav');
    const section = document.querySelector('main').querySelector(`[data-nav="${dataNav}"]`)
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    })
    console.log(section);
  })
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


