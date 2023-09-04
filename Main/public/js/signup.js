const signupFormHandler = async (event) => {
  event.preventDefault();

  const usernameInput = document.querySelector('#username-input-signup');
  const passwordInput = document.querySelector('#password-input-signup');

  const username = usernameInput ? usernameInput.value.trim() : null;
  const password = passwordInput ? passwordInput.value.trim() : null;

  console.log(username);
  console.log(password);

  if (username && password) {
    try {
      const response = await fetch('/api/user', {
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
        throw new Error('Failed to sign up');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while trying to sign up');
    }
  } else {
    alert('Please provide both a username and password');
  }
};

const signupForm = document.querySelector('.signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', signupFormHandler);
}
