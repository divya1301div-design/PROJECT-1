// ==================== SIGN UP FUNCTION ====================
function signup() {
  // document.getElementById() - Built-in DOM method to get HTML element by its ID
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // if() statement - checks if any field is empty
  if (!name || !email || !password) {
    // alert() - predefined function to show popup message
    alert('Please fill all fields!');
    return; // stops execution if validation fails
  }

  // Creating a JavaScript object to store user data
  const user = { name, email, password };

  // JSON.stringify() - converts JavaScript object into string for storage
  // localStorage.setItem() - built-in Web Storage API method to save data in browser
  localStorage.setItem('fruitshopUser', JSON.stringify(user));

  // alert() - displays success message
  alert('Signup successful! You can now login.');

  // window.location.href - predefined property to redirect to another page
  window.location.href = 'index.html';
}



// ==================== SIGN IN FUNCTION ====================
function signin() {
  // Get email & password entered by user
  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;

  // localStorage.getItem() - retrieves stored data (as a string)
  // JSON.parse() - converts string back into JavaScript object
  const user = JSON.parse(localStorage.getItem('fruitshopUser'));

  // Check if user data matches stored data
  if (user && user.email === email && user.password === password) {
    // Save logged-in user temporarily in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    // Redirect to order page
    window.location.href = 'order.html';
  } else {
    // alert() - built-in function for error message
    alert('Invalid email or password!');
  }
}



// ==================== PLACE ORDER FUNCTION ====================
function placeOrder() {
  // Retrieve logged-in user info
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  // document.getElementById() - gets selected fruit & quantity entered
  const fruit = document.getElementById('fruitSelect').value;

  // parseFloat() - predefined function to convert string to decimal number
  const qty = parseFloat(document.getElementById('quantity').value);

  // Object with fruit names and prices
  const prices = { Apple: 100, Banana: 40, Mango: 120, Orange: 80, Grapes: 90 };

  // Check if quantity is valid
  if (!qty || qty <= 0) {
    alert('Please enter a valid quantity!');
    return;
  }

  // Calculate total cost
  const total = qty * prices[fruit];

  // document.getElementById().innerText - set output text in HTML
  document.getElementById('orderResult').innerText =
    `Hello ${user.name}, \n your order for ${qty}kg of ${fruit} is placed. \n Total = Rs.${total}`;
}



// ==================== DISPLAY WELCOME MESSAGE ON LOAD ====================
// window.addEventListener() - built-in method to listen for page load event
window.addEventListener('load', () => {
  // window.location.pathname - returns current page URL path
  if (window.location.pathname.includes('order.html')) {

    // Retrieve logged-in user info
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    // Redirect if no user is logged in
    if (!user) {
      window.location.href = 'index.html';
    } else {
      // document.getElementById().innerText - display welcome message
      document.getElementById('welcome').innerText = `Welcome, ${user.name}! `;
    }
  }
});



// ==================== LOGOUT FUNCTION ====================
function logout() {
  // localStorage.removeItem() - predefined method to delete stored data
  localStorage.removeItem('loggedInUser');

  // Redirect to sign-in page
  window.location.href = 'index.html';
}




/**
 | Function / Object           | Type            | Purpose                              |
| --------------------------- | --------------- | ------------------------------------ |
| `document.getElementById()` | DOM Method      | Accesses HTML element by ID          |
| `alert()`                   | Window Method   | Displays popup messages              |
| `localStorage`              | Web Storage API | Stores data persistently in browser  |
| `localStorage.setItem()`    | Method          | Saves key–value pair in localStorage |
| `localStorage.getItem()`    | Method          | Retrieves stored value               |
| `localStorage.removeItem()` | Method          | Deletes a stored key                 |
| `JSON.stringify()`          | JSON Method     | Converts JS object - string          |
| `JSON.parse()`              | JSON Method     | Converts string - JS object          |
| `parseFloat()`              | Number Function | Converts string - floating number    |
| `window.location.href`      | Property        | Redirects to another page            |
| `window.addEventListener()` | Event Listener  | Handles page load event              |

 */