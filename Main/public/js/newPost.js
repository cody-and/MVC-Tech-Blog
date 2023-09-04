const newFormHandler = async (event) => {
  event.preventDefault();

  const postTitleInput = document.querySelector('input[name="post-title"]');
  const postContentInput = document.querySelector('textarea[name="post-body"]');

  const postTitle = postTitleInput ? postTitleInput.value : null;
  const postContent = postContentInput ? postContentInput.value : null;

  console.log(postTitle);
  console.log(postContent);

  if (postTitle && postContent) {
    try {
      await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
          postTitle,
          postContent,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      document.location.replace('/dashboard');
    } catch (error) {
      console.error(error);
      alert('An error occurred while trying to create a new post');
    }
  } else {
    alert('Please provide both a post title and content');
  }
};

const newPostForm = document.querySelector('#new-post-form');
if (newPostForm) {
  newPostForm.addEventListener('submit', newFormHandler);
}
