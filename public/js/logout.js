const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
<<<<<<< HEAD
}

function showErrorModal(message) {
  document.getElementById('errorMessage').innerText = message;
  $('#errorModal').modal('show');
}

if (document.querySelector('#logout')) {
  document.querySelector('#logout').addEventListener('click', logout);
}
=======

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
>>>>>>> 95d6304d0a1a7f277c642ccc005e51bde9a12684
