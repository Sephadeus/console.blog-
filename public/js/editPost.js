
const editPost = async (e) => {
  e.preventDefault();

  let title = document.getElementById("updateTitle").value.trim();
  let content = document.getElementById("updateContent").value.trim();
  const post_id = e.target.getAttribute("data");

  console.log(post_id);
  console.log(title);
  console.log(content);

  const res = await fetch(`/api/posts/${post_id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title: title,
      post_content: content
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    alert("Your post has been updated!");
    document.location.replace("/profile");
  } else {
    console.error();
    alert(res.statusText);
  }
};

const editPostBtn = document.getElementById(`editPost`);
editPostBtn.addEventListener("click", editPost);
