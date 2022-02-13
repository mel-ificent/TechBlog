const post_id = document.querySelector('#post_id').innerHTML;

const newFormHandler = async (event) => {

        document.location.replace(`/comment/${post_id}`);

  };
  
  document
    .querySelector('#new-comment')
    .addEventListener('click', newFormHandler);