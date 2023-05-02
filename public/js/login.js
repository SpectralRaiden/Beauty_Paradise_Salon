<<<<<<< HEAD
const loginFormHandler = async (event) => {                         // Login handler
  event.preventDefault();                                           // Stop refresh

  const username = document.querySelector("#username").value.trim();  // Get username
  const password = document.querySelector("#password").value.trim();    // Get password

  if (username && password) {                                           // Check fields
    const response = await fetch("/api/users/login", {                  // Fetch login
      method: "POST",
      body: JSON.stringify({ username, password }),                     // JSON body
      headers: { "Content-Type": "application/json" },                  // Set headers
    });

    if (response.ok) {                                                    // On success
      document.location.replace("/");                                     // Redirect
    } else {                                                              // Show error
      // alert('Failed to log in.');
      // Show the error message in a modal
      showErrorModal("Failed to log in.");
    }
  } else {
    // alert('Please fill out all fields.');
    // Show the error message in a modal
    showErrorModal("Please fill out all fields.");
  }
};

// Define a function to show the error message in a modal
function showErrorModal(message) {
  // Update the content of the modal with the error message
  document.getElementById("errorMessage").innerText = message;
  // Show the modal
  $("#errorModal").modal("show");
}

const signupFormHandler = async (event) => {
  event.preventDefault();

  const fname = document.querySelector("#firstname").value.trim();
  const lname = document.querySelector("#lastname").value.trim();
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (fname && lname && username && email && password) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ fname, lname, username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();

    if (response.ok) {
      document.location.replace("/");
    } else {
      showErrorModal(json);
    }
  } else {
    showErrorModal("Please fill out all fields.");
  }
};

if (document.querySelector("#login-form")) {
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);
}

if (document.querySelector("#signup-form")) {
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);
}
=======
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
>>>>>>> 95d6304d0a1a7f277c642ccc005e51bde9a12684
