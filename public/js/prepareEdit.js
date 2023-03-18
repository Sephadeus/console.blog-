const prepareEdit = async (e) => {
    e.preventDefault();

const post_id = e.target.getAttribute('data');

document.location.replace(`/editPost/${post_id}`);

}

// const prepareBtn = document.querySelector('#prepareEdit');
// prepareBtn.addEventListener("click", prepareEdit);