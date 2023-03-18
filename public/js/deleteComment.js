const deleteComment = async (i) => {
    // e.preventDefault();

let comment_id = i;

console.log(comment_id);
    const res = await fetch(`/api/comments/${comment_id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    if(res.ok) {
document.location.reload();
    } else {
        console.error();
        alert(res.statusText);
        // document.location.replace("/profile");
    }

}

const trashBtn = document.querySelectorAll(`.deleteBtn`);
[...trashBtn].forEach(item => {
    item.addEventListener('click', e => {
          e.preventDefault();
        const id = item.getAttribute("data");
      console.log(id)
        deleteComment(id);
    })
});
