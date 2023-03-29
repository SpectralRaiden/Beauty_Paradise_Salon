const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
}

function showErrorModal(message) {
  document.getElementById('errorMessage').innerText = message;
  $('#errorModal').modal('show');
}

if (document.querySelector('#logout')) {
  document.querySelector('#logout').addEventListener('click', logout);
}
