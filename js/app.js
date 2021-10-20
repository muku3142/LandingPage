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

//Navigation Menu
const liNode= [];
const anch=[];


/**
 * End Global Variables
 * --------------------------------------------------------------------------------------------------------
 * Start Helper Functions
 */
//remove active class from non-target classes



/**
 * End Helper Functions
 --------------------------------------------------------------------------------------------------------
 * Begin Main Functions
 *
 */

// build the nav
//const navigate= document.querySelector('nav');
const navigate= document.querySelector('#navbar');

//for loop to add li elements
for(let i=0; i<5;i++) {
    //lists
    liNode[i] = document.createElement('li');
    liNode[i].textContent = "Section " + (i+1);
    navigate.appendChild(liNode[i]);
    liNode[i].id="navbar__list" ;

    //Adding attribure data-nav to li
    var att= document.createAttribute("data-nav");
    att.value= "Section" +i;
    liNode[i].setAttributeNode(att);


    //Event Listener
    liNode[i].addEventListener('click', () => {
        sections[i].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
}



//Appending the lists using fragments to enhance performance
//navigate.appendChild(liNode[]);

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

// Scroll to anchor ID using scrollTO event
//Scroll Function
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
 * End Main Functions
 * --------------------------------------------------------------------------------------------------------
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active