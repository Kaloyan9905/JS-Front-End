function attachEvents() {
  const buttonLoadPosts = document.getElementById("btnLoadPosts");
  const buttonViewPosts = document.getElementById("btnViewPost");

  buttonLoadPosts.addEventListener("click", onClickLoadPosts);
  buttonViewPosts.addEventListener("click", onClickViewPosts);

  let posts = null;

  async function onClickLoadPosts(event) {
    try {
      const response = await fetch(
        "http://localhost:3030/jsonstore/blog/posts"
      );
      const data = await response.json();
      posts = data;

      for (const index in data) {
        const option = document
          .getElementById("posts")
          .appendChild(document.createElement("option"));
        option.value = data[index].id;
        option.textContent = data[index].title;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function onClickViewPosts(event) {
    function findPostTitle(allPosts) {
      const currentPostValue = allPosts.value;

      for (let post of allPosts) {
        if (currentPostValue === post.value) {
          return post.textContent;
        }
      }
    }

    function findPostBody(allPosts, id) {
      for (const index in allPosts) {
        if (id === allPosts[index].id) {
          return allPosts[index].body;
        }
      }
    }

    try {
      const response = await fetch(
        "http://localhost:3030/jsonstore/blog/comments"
      );
      const data = await response.json();

      const postsDisplay = document.getElementById("posts");
      const currentPostId = postsDisplay.value;

      document.getElementById("post-title").textContent =
        findPostTitle(postsDisplay);
      document.getElementById("post-body").textContent = findPostBody(
        posts,
        currentPostId
      );

      const comments = document.getElementById("post-comments");

      //clear comments section
      while (comments.firstChild) {
        comments.removeChild(comments.firstChild);
      }

      //add all comments
      for (const index in data) {
        if (currentPostId === data[index].postId) {
          const li = comments.appendChild(document.createElement("li"));
          li.id = data[index].id;
          li.textContent = data[index].text;
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}

attachEvents();
