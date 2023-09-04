const postIdInput = document.querySelector('input[name="post-id"]');
const postId = postIdInput ? postIdInput.value : null;

console.log(postId);

const editFormHandler = async (event) => {
  event.preventDefault();

  const postTitleInput = document.querySelector('input[name="post-title"]');
  const postContentInput = document.querySelector('textarea[name="post-body"]');

  const postTitle = postTitleInput ? postTitleInput.value : null;
  const postContent = postContentInput ? postContentInput.value : null;

  console.log(postTitle);
  console.log(postContent);

  if (postTitle && postContent && postId) {
    try {
      const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
          postTitle,
          postContent,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        throw new Error('Failed to update your post');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while trying to update your post');
    }
  } else {
    alert('Please provide both a post title and content');
  }
};

const deleteClickHandler = async () => {
  if (postId) {
    try {
      await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
      });

      document.location.replace('/dashboard');
    } catch (error) {
      console.error(error);
      alert('An error occurred while trying to delete your post');
    }
  } else {
    alert('Invalid post ID. Please try again later.');
  }
};

const editPostForm = document.querySelector('#edit-post-form');
if (editPostForm) {
  editPostForm.addEventListener('submit', editFormHandler);
}

const deleteButton = document.querySelector('#delete-btn');
if (deleteButton) {
  deleteButton.addEventListener('click', deleteClickHandler);
}
