const newFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    const commentor = document.querySelector('#comment-btn').getAttribute('commentor');
    // const post_id = 
    const queryString = window.location.href;
    const splitQuery = queryString.split("comment/");
    post_id = splitQuery[1];
 

    if (content) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ content,commentor,post_id }),
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