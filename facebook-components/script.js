// User Class Constructor
class User {
  constructor(firstName, lastName, email, password, birthDay, birthMonth, birthYear, gender) {
    this.id = this.generateUniqueId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.birthDay = birthDay;
    this.birthMonth = birthMonth;
    this.birthYear = birthYear;
    this.gender = gender;
    this.createdAt = new Date().toISOString();
    this.friends = []
  }

  // Generate unique ID based on existing users length
  generateUniqueId() {
    const users = this.getAllUsers();
    return users.length + 1;
  }

  // Get all users from localStorage
  getAllUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  // Save user to localStorage
  saveUser() {
    const users = this.getAllUsers();
    users.push(this);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('User saved successfully with ID:', this.id);
    return this.id;
  }

  // Get user by ID
  static getUserById(id) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userData = users.find(user => user.id === parseInt(id));
    if (userData) {
      return this.createUserInstance(userData);
    }
    return null;
  }

  // Get user by email
  static getUserByEmail(email) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userData = users.find(user => user.email === email);
    if (userData) {
      return this.createUserInstance(userData);
    }
    return null;
  }

  // Helper method to create User instance from stored data
  static createUserInstance(userData) {
    const user = new User(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password,
      userData.birthDay,
      userData.birthMonth,
      userData.birthYear,
      userData.gender
    );
    // Restore the original ID and creation date
    user.id = userData.id;
    user.createdAt = userData.createdAt;
    return user;
  }

  // Validate user login
  static validateLogin(email, password) {
    const user = this.getUserByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  // Update user
  updateUser(updatedData) {
    const users = this.getAllUsers();
    const userIndex = users.findIndex(user => user.id === this.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...this, ...updatedData };
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    }
    return false;
  }

  // Delete user
  deleteUser() {
    const users = this.getAllUsers();
    const filteredUsers = users.filter(user => user.id !== this.id);
    localStorage.setItem('users', JSON.stringify(filteredUsers));
    return true;
  }

  // Get full name
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Get age
  getAge() {
    const birthDate = new Date(this.birthYear, this.birthMonth - 1, this.birthDay);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }
}

// Utility functions
const UserUtils = {
  // Get all users
  getAllUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  },

  // Clear all users (for testing)
  clearAllUsers() {
    localStorage.removeItem('users');
    console.log('All users cleared from localStorage');
  },

  // Get total user count
  getUserCount() {
    return this.getAllUsers().length;
  },

  // Check if email already exists
  isEmailExists(email) {
    const users = this.getAllUsers();
    return users.some(user => user.email === email);
  }
};

// Form handling for signup page
function handleSignupForm(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const firstName = formData.get('firstName') || document.querySelector('input[placeholder="First name"]').value;
  const lastName = formData.get('lastName') || document.querySelector('input[placeholder="Surname"]').value;
  const email = formData.get('email') || document.querySelector('input[type="email"]').value;
  const password = formData.get('password') || document.querySelector('input[type="password"]').value;
  const birthDay = formData.get('birthDay') || document.querySelector('select:first-of-type').value;
  const birthMonth = formData.get('birthMonth') || document.querySelector('select:nth-of-type(2)').value;
  const birthYear = formData.get('birthYear') || document.querySelector('select:nth-of-type(3)').value;
  const gender = formData.get('gender') || document.querySelector('input[name="gender"]:checked')?.value;

  // Validation
  if (!firstName || !lastName || !email || !password || !birthDay || !birthMonth || !birthYear || !gender) {
    alert('Please fill in all required fields');
    return;
  }

  // Check if email already exists
  if (UserUtils.isEmailExists(email)) {
    alert('An account with this email already exists');
    return;
  }

  // Create new user
  const newUser = new User(firstName, lastName, email, password, birthDay, birthMonth, birthYear, gender);
  const userId = newUser.saveUser();

  alert(`Account created successfully! Your user ID is: ${userId}`);
  
  // Redirect to login page
  window.location.href = 'index.html';
}

// Form handling for login page
function handleLoginForm(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const email = formData.get('email') || document.querySelector('input[type="text"]').value;
  const password = formData.get('password') || document.querySelector('input[type="password"]').value;

  // Validation
  if (!email || !password) {
    alert('Please enter both email and password');
    return;
  }

  // Validate login
  const user = User.validateLogin(email, password);
  console.log("user" , user)
  if (user) {
    alert(`Welcome back, ${user.getFullName()}!`);
    // Store logged in user info
    localStorage.setItem('currentUser', JSON.stringify(user));
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password');
  }
}

// Initialize forms when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Handle signup form
  const signupForm = document.querySelector('form');
  if (signupForm && window.location.pathname.includes('signup.html')) {
    signupForm.addEventListener('submit', handleSignupForm);
  }

  // Handle login form
  const loginForm = document.querySelector('form');
  if (loginForm && window.location.pathname.includes('index.html')) {
    loginForm.addEventListener('submit', handleLoginForm);
  }

  // Add form names and IDs for better form handling
  const forms = document.querySelectorAll('form');
  forms.forEach((form, index) => {
    form.id = index === 0 ? 'loginForm' : 'signupForm';
  });

  // Add name attributes to form inputs for better form handling
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    if (input.type === 'text' && input.placeholder === 'Email address or phone number') {
      input.name = 'email';
    } else if (input.type === 'password') {
      input.name = 'password';
    } else if (input.placeholder === 'First name') {
      input.name = 'firstName';
    } else if (input.placeholder === 'Surname') {
      input.name = 'lastName';
    }
  });

  // Add name attributes to select elements
  const selects = document.querySelectorAll('select');
  selects.forEach((select, index) => {
    if (index === 0) select.name = 'birthDay';
    else if (index === 1) select.name = 'birthMonth';
    else if (index === 2) select.name = 'birthYear';
  });

  // Add name attributes to radio buttons
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => {
    radio.name = 'gender';
  });
});

// Export for use in console (for testing)
window.User = User;
window.UserUtils = UserUtils;
