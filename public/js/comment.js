const newFormHandler = async (event) => {
    event.preventDefault();
  console.log("entered the formhandler");
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#post_id').textContent;

    if (content) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('#new-comment')
    .addEventListener('submit', newFormHandler);