const addComment = async (e) => {
  e.preventDefault();

  const comment = document.getElementById("commentToAdd").value.trim();
  const post_id = e.target.getAttribute("data");

  if (comment) {
    const res = await fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        comment,
        post_id
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
document.location.replace(`/post/${post_id}`);
    } else {
      console.error();
      alert(res.statusText);
    }
  }
};

document.getElementById("addComment").addEventListener("click", addComment);
