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
var navTimeOut = setTimeout(() => { // to hide the navbar while not scrolling
  navList.style.display = "none";
}, 3000);  

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Function to test if the element is in the view port or not.
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= -50 &&
      rect.bottom <= window.innerHeight  
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
  // Create list item with ID && data-nav && class 
  listItem.innerHTML = `<a href='#${sectionId}' data-nav='${sectionData}' class='menu__link'>${sectionHeader.textContent}</a>`;
  fragment.appendChild(listItem);
})
// Adding each created list item to the navbar 
navList.appendChild(fragment);
// Set first link to be active by default;
document.querySelector('.menu__link').classList.add('active');



/**
 * End Main Functions
 * Begin Events
 * 
*/

//  Scroll to section on link click
const links = document.querySelectorAll('.menu__link');
links.forEach(link => {
  link.addEventListener('click', function(e){
    // Disable the anchor tags default behaivor
    e.preventDefault();
    // Determine the section of the clicked link
    const dataNav = e.target.getAttribute('data-nav');
    const section = document.querySelector('main').querySelector(`[data-nav="${dataNav}"]`)
    // Scroll to this section 
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    })
  })
})

// Check if the section is in the view port to add active class
window.addEventListener('scroll', function(){
  // Show the navbar while scrolling and start a new timer to hide it
  navList.style.display = "block"
  clearTimeout(navTimeOut);
  navTimeOut = setTimeout(() => {
    navList.style.display = "none";
  }, 3000);  
  sections.forEach(section => {
    // Determine the link of the current section
    const sectionData = section.getAttribute('data-nav');
    const link = navList.querySelector(`[data-nav="${sectionData}"]`);
    // Delete the active section class from all sections for reset
    // Check if the current section is in the view port 
    if (isInViewport(section)){
      // Remove the active class from all links
      links.forEach(link =>{
        link.classList.remove('active')
      })
      // Add the active class to the desired link
      link.classList.add('active');
      // Remove the active class from all sections
      sections.forEach(section => {
        section.classList.remove('your-active-class');
      })
      // Add the active class to current section
      section.classList.add('your-active-class');
    } 
  })
})
