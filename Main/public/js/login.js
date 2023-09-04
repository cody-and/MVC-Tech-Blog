const loginFormHandler = async (event) => {
  event.preventDefault();

  const usernameInput = document.querySelector('#username-input-login');
  const passwordInput = document.querySelector('#password-input-login');

  const username = usernameInput ? usernameInput.value : null;
  const password = passwordInput ? passwordInput.value : null;

  if (username && password) {
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while trying to login');
    }
  } else {
    alert('Please provide both a username and password');
  }
};

const loginForm = document.querySelector('.login-form');
if (loginForm) {
  loginForm.addEventListener('submit', loginFormHandler);
}
