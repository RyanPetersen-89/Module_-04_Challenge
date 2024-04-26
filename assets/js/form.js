const blogContent = document.getElementById('blog-content');
const blogPreviewHandler = document.getElementById('preview-handler');
const blogPreview = document.getElementById('blog-preview')
const username = document.getElementById('username');
const blogTitle = document.getElementById('blog-title');
const submitButton = document.getElementById('submit-button')
/***********************************************************************************************/
//This function updates the blog preview section when content is added to the blog content input.
/***********************************************************************************************/
blogContent.addEventListener('input', function() {
  const titlePreview = document.createElement('h2');
  titlePreview.textContent = blogTitle.value;
  blogPreview.textContent = blogContent.value;
  blogPreviewHandler.appendChild(titlePreview);
  console.log('blogPreviewHandler');
  return;
});
//I am working on the above to try and make an eventlistener that shows both the blog title and the blog content to the preview section.

document.getElementById('modeToggle').addEventListener('change',function() {
  document.body.classList.toggle('dark-mode');
});

/***************************************************************************/
/*This function is SUPPOSED to add the content of the form to local storage.*/
/***************************************************************************/

submitButton.addEventListener('click', function(event){
  event.preventDefault();
  const storedUser = username.value;
  const storedTitle = blogTitle.value;
  const storedContent = blogContent.value;

  if (storedUser.trim()=== ''){
    alert('Username cannot be empty!');
    return;
  }
  else if(storedTitle.trim()=== ''){
    alert('Blog Title cannot be empty!')
    return;
  }
  else if(storedContent === ''){
    alert("Blog's Body cannot be empty!")
    return;
  }
  else{
    this.localStorage.setItem('username',storedUser);
    this.localStorage.setItem('blogTitle', storedTitle);
    this.localStorage.setItem('blogContent', storedContent);
    return;
  }
});