const addPost = async (e) => {
    e.preventDefault();

    let title = document.getElementById('postTitle').value.trim();
    let content = document.getElementById('postContent').value.trim();

    if(title && content){
    const res = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({
            title, 
            content
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(res.ok) {
alert('Thanks for sharing! Your post has been submitted!');

document.location.replace('/profile');
    } else {
        console.error();
        alert(res.statusText);
    }

}
}

document.getElementById('addPost').addEventListener("click", addPost);