const editPost = async (e) => {
    e.preventDefault();

    let title = document.getElementById('updateTitle').value.trim();
    let content = document.getElementById('updateContent').value.trim();

const post_id = e.target.getAttribute('data');
console.log(post_id);
    const res = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title, 
            content
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(res.ok) {
        alert('Your post has been updated!');
        title = '';
        content = '';
        document.location.reload();
    } else {
        console.error();
        alert(res.statusText);
    }

}

const editPostBtn = document.getElementById('editPost');
editPostBtn.addEventListener("click", editPost);