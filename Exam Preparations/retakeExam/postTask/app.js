window.addEventListener("load", solve);

function solve() {
  const titleField = document.getElementById("task-title");
  const categoryField = document.getElementById("task-category");
  const contentField = document.getElementById("task-content");

  const reviewList = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");

  const buttonPublish = document.getElementById("publish-btn");
  buttonPublish.addEventListener("click", onClickPublish);

  function clearFields() {
    titleField.value = "";
    categoryField.value = "";
    contentField.value = "";
  }

  function onClickPublish(event) {
    if (event) {
      event.preventDefault();
    }

    let title = titleField.value;
    let category = categoryField.value;
    let content = contentField.value;

    if (!title || !category || !content) {
      return;
    }

    // create template

    let li = document.createElement("li");
    li.classList.add("rpost");

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = title;

    let pCategory = document.createElement("p");
    pCategory.textContent = `Category: ${category}`;
    pCategory.classList = category;

    let pContent = document.createElement("p");
    pContent.textContent = `Content: ${content}`;
    pContent.classList = content;

    let buttonEdit = document.createElement("button");
    buttonEdit.classList = "action-btn edit";
    buttonEdit.textContent = "Edit";

    let buttonPost = document.createElement("button");
    buttonPost.classList = "action-btn post";
    buttonPost.textContent = "Post";

    buttonEdit.addEventListener("click", onClickEdit);
    buttonPost.addEventListener("click", onClickPost);

    article.appendChild(h4);
    article.appendChild(pCategory);
    article.appendChild(pContent);

    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(buttonPost);

    reviewList.appendChild(li);

    clearFields();
  }

  function onClickEdit(event) {
    if (event) {
      event.preventDefault();
    }

    let parent = event.target.parentElement;

    parent.remove();

    let h4Title = parent.querySelectorAll("article h4")[0];
    let pCategory = parent.querySelectorAll("article p")[0];
    let pContent = parent.querySelectorAll("article p")[1];

    titleField.value = h4Title.textContent;
    categoryField.value = pCategory.classList.value;
    contentField.value = pContent.classList.value;
  }

  function onClickPost(event) {
    if (event) {
      event.preventDefault();
    }

    let parent = event.target.parentElement;

    let button1 = parent.querySelectorAll("button")[0];
    let button2 = parent.querySelectorAll("button")[1];

    parent.remove();

    parent.removeChild(button1);
    parent.removeChild(button2);

    publishedList.appendChild(parent);
  }
}
