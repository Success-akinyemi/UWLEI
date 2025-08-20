// Set login status
function loginUser() {
  localStorage.setItem('loggedIn', 'true');
}

// Check login
function isLoggedIn() {
  return localStorage.getItem('loggedIn') === 'true';
}

// Protect page
function protectPage() {
  if (!isLoggedIn()) {
    window.location.href = '/login.html';
  }
}

// Logout
function logoutUser() {
  localStorage.removeItem('loggedIn');
  window.location.href = '/login.html';
}
