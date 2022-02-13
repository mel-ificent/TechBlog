const post_id = document.querySelector('#post_id').innerHTML;


const newFormHandler = async (event) => {
        document.location.replace(`/comment/${post_id}`);

  };

  const delButtonHandler = async (event) => {
      console.log("btn clicked");
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id);
  
      const response = await fetch(`/api/comment/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('You cannot delete comments you did not author.');
      }
    }
  };

  
  document
    .querySelector('#new-comment')
    .addEventListener('click', newFormHandler);

    document
    .querySelector('#comments-list')
    .addEventListener('click', delButtonHandler);
  