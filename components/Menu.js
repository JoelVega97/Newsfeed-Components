// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const header = document.querySelector('.header')
const menuButton = document.querySelector('.menu-button')

function menuMaker(menuArr){

  const menu = document.createElement('div')
  const ul = document.createElement('ul')

  menu.appendChild(ul)

  menu.className = 'menu'

 for (let i = 0; i < menuItems.length; i++) {
   const theList =  document.createElement('li')
   theList.textContent = menuItems[i]
    ul.appendChild(theList)  
 }

  menuButton.addEventListener('click', function(event){
    menu.classList.toggle('menu--open')
  })
  return menu
}

let newMenu = menuMaker(menuItems)

header.appendChild(newMenu)

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:XXX

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.XXX

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>XXX

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').XXX

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).XXX

  Step 5: Don't forget to return your div.menu.XXX

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
