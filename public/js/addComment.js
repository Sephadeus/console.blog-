const addComment = async (e) => {
    e.preventDefault();

    let comment = document.getElementById('comment').value.trim();

    if(comment){
    const res = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({
            comment
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(res.ok) {
comment = '';
document.location.reload();
    } else {
        console.error();
        alert(res.statusText);
    }

}
}

document.getElementById('addComment').addEventListener("click", addComment);