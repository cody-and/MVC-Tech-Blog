const logout = async () => {
  try {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
      alert('Logged out successfully!');
    } else {
      throw new Error('Failed to log out');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while trying to log out');
  }
};

const logoutLink = document.querySelector('#logout-link');
if (logoutLink) {
  logoutLink.addEventListener('click', logout);
}
