const postIdInput = document.querySelector('input[name="post-id"]');
const postId = postIdInput ? postIdInput.value : null;

const commentFormHandler = async (event) => {
  event.preventDefault();

  const commentContentInput = document.querySelector('textarea[name="comment-body"]');
  const commentContent = commentContentInput ? commentContentInput.value : null;
  console.log(commentContent);

  if (commentContent && postId) {
    try {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          commentContent
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.reload();
      } else {
        throw new Error(`Failed to submit comment: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting your comment.');
    }
  } else {
    alert('Invalid input. Please provide a comment and ensure a post ID is available.');
  }
};

const commentForm = document.querySelector('#new-comment-form');
if (commentForm) {
  commentForm.addEventListener('submit', commentFormHandler);
}
