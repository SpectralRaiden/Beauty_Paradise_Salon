const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();                            // Assigns trimmed username value.
  const password = document.querySelector("#password").value.trim();                            // Assigns trimmed password value.

  if (username && password) {                                                                   // Checks login credentials
    const response = await fetch("/api/users/login", {                                          // Performs a network request.
      method: "POST",
      body: JSON.stringify({ username, password }),                                             // Converts object to string.
      headers: { "Content-Type": "application/json" },                                          // Sets Content-Type header of HTTP request to application/json.
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert('Failed to log in.');                                                                 // Show the error message in a modal
      
    }
};



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
