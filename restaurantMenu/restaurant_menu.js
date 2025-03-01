// Define an array of breakfast menu items with names and prices
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict- $22.99', 'Oatmeal- $21.99', 'Frittata- $15'];

// Define an array of main course menu items
const mainCourseMenu = ['Steak- $25', 'Pasta- $12', 'Burger- $14.99', 'Salmon- $32'];

// Define an array of dessert menu items
const dessertMenu = ['Cake- $8.99', 'Ice Cream- $6', 'Pudding- $5', 'Fruit Salad- $4'];

// Generate HTML string for breakfast menu items using map()
// Each item is wrapped in a <p> tag with an item number
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');

// Insert the generated HTML into the 'breakfastMenuItems' element
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Initialize an empty string to store main course menu items
let mainCourseItem = '';

// Loop through mainCourseMenu using forEach() and build the HTML string
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});

// Insert the generated main course menu items into the 'maincourseMenuItems' element
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Initialize an empty string to store dessert menu items
let dessertItem = '';

// Loop through dessertMenu using a traditional for loop and build the HTML string
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

// Insert the generated dessert menu items into the 'dessertMenuItems' element
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
