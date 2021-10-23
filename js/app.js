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

/**-------------------------------------------------------------------------------------------------------
 * Define Global Variables
 Add a constant pointing at each section on nav
 */
//Sections
const sections= document.querySelectorAll('section');
const sectionsLength= sections.length;
//Navigation Menu
const liNode= [];
const anch=[];
const button_id= document.getElementById('nav-button');
const navigate_top= document.querySelector('.navbar__menu');
const navigate= document.querySelector('#navbar');
const liItems= document.querySelectorAll('li.nav_li');
/**
 * End Global Variables
 * --------------------------------------------------------------------------------------------------------
 * Start Helper Functions
 */
//activate section
let callback= entries=> {
    entries.forEach( (entry)=> {
        if (entry.isIntersecting) {

            //remove items
            sections.forEach( (item)=>{
                if (item.classList.contains("your-active-class")){
                    item.classList.remove("your-active-class");
                }
            });
            //add active class
            let activeDataNav= entry.target.getAttribute("data-nav");

            //add new class to active link
            let activeClass= document.querySelector("[data-nav="+ CSS.escape(activeDataNav) + "]");

            activeClass.classList.add("your-active-class");

        }
    });
}








/**
 * End Helper Functions
 --------------------------------------------------------------------------------------------------------
 * Begin Main Functions
 *
 */

// build the nav

//adding a button element
let nav_button= document.createElement("button");
nav_button.innerHTML="Navigation Menu";
nav_button.id= "nav-button";
navigate_top.insertAdjacentElement('afterbegin',nav_button);

//adding button event listener to toggle show and hide upon click
nav_button.addEventListener('click', ()=> {
           let navigateStatus= navigate.style.display;
            if(navigateStatus === 'none'){
               navigate.style.display='block';
            } else {
                navigate.style.display='none';
            }

});


//for loop to add li elements
for(let i=0; i< sectionsLength ;i++) {
    //lists
    liNode[i] = document.createElement('li');
    liNode[i].textContent = "Section " + (i+1);
    navigate.appendChild(liNode[i]);
    liNode[i].id="navbar__list" ;

    //Adding attribure data-nav to li
    var att= document.createAttribute("data-nav");
    att.value= "Section" +i;
    liNode[i].setAttributeNode(att);
    //Adding a class to differentiate navigation items
    liNode[i].classList.add("nav_li");

    //Event Listener
    liNode[i].addEventListener('click', () => {
        sections[i].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        //liHighlight();
    });

    liNode[i].addEventListener('mouseover', (event) => {

            liNode[i].classList.add("your-active-class");

        setTimeout(() => {liNode[i].classList.remove("your-active-class")}, 500);


        //liHighlight();
    });




}

function liHighlight(item){
    item.classList.add("your-active-class");

}
// Add class 'active' to section when near top of viewport
let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.4
}

let observer = new IntersectionObserver(callback, options);
    sections.forEach( (item)=> {
    observer.observe(item);
});

//Adding navigation items observer
//
// let observerLI = new IntersectionObserver(callbackLi, options);
// liItems.forEach( (LiItem)=> {
//     observer.observe(liItem);
// });

// Scroll to anchor ID using scrollTO event
//Scroll Function


/**
 * End Main Functions
 * --------------------------------------------------------------------------------------------------------
 * Begin Events
 *

 */


// Build menu

// Scroll to section on link click

// Set sections as active


