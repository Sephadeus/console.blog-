const deletePost = async (e) => {
    e.preventDefault();

const post_id = e.target.getAttribute('data');
console.log(post_id);
    const res = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    if(res.ok) {
document.location.reload();
    } else {
        console.error();
        alert(res.statusText);
    }

}

document.getElementById('deletePost').addEventListener("click", deletePost);