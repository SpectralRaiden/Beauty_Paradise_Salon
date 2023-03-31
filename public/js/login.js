function showErrorModal(message) {
  document.getElementById("errorMessage").innerText = message;                    // Set error text
  $("#errorModal").modal("show");                                                 // Show error modal
}


const loginFormHandler = async (event) => {                                       // Login form handler
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();              // Get username
  const password = document.querySelector("#password").value.trim();              // Get password

  if (username && password) {                                                     // Check inputs                                
    const response = await fetch("/api/users/login", {                            // Send login request
      method: "POST",
      body: JSON.stringify({ username, password }),                               // JSON body  *
      headers: { "Content-Type": "application/json" },                            // JSON header
    });

    if (response.ok) {                                                            // If success
      document.location.replace("/");                                             // Redirect home
    } else {                                                                      // If fail
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



const signupFormHandler = async (event) => {                                  // Signup form handler
  event.preventDefault();                                                     // Prevent refresh

  const fname = document.querySelector("#firstname").value.trim();              // Get first name
  const lname = document.querySelector("#lastname").value.trim();               // Get last name
  const username = document.querySelector("#username").value.trim();            // Get username
  const email = document.querySelector("#email").value.trim();                  // Get email
  const password = document.querySelector("#password").value.trim();            // Get password

  if (fname && lname && username && email && password) {                         // Check inputs
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
