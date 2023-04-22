window.addEventListener("load", solve);

function solve() {
  const titleField = document.getElementById("post-title");
  const categoryField = document.getElementById("post-category");
  const contentField = document.getElementById("post-content");

  const reviewList = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");

  const buttonPublish = document.getElementById("publish-btn");
  const buttonClear = document.getElementById("clear-btn");

  buttonPublish.addEventListener("click", onClickPublish);
  buttonClear.addEventListener("click", onClickClear);

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

    let li = document.createElement("li");
    li.classList = "rpost";

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = title;

    let pCategory = document.createElement("p");
    pCategory.textContent = `Category: ${category}`;

    let pContent = document.createElement("p");
    pContent.textContent = `Content: ${content}`;

    let buttonEdit = document.createElement("button");
    buttonEdit.classList = "action-btn edit";
    buttonEdit.textContent = "Edit";

    let buttonApprove = document.createElement("button");
    buttonApprove.classList = "action-btn approve";
    buttonApprove.textContent = "Approve";

    buttonEdit.addEventListener("click", onClickEdit);
    buttonApprove.addEventListener("click", onClickApprove);

    article.appendChild(h4);
    article.appendChild(pCategory);
    article.appendChild(pContent);

    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(buttonApprove);

    reviewList.appendChild(li);

    clearFields();
  }

  function onClickClear(event) {
    if (event) {
      event.preventDefault();
    }

    publishedList.innerHTML = "";
  }

  function onClickEdit(event) {
    if (event) {
      event.preventDefault();
    }

    let parent = event.target.parentElement;

    let titleFieldCurrent = parent.querySelectorAll("article h4")[0];
    let categoryFieldCurrent = parent.querySelectorAll("article p")[0];
    let contentFieldCurrent = parent.querySelectorAll("article p")[1];

    let title = titleFieldCurrent.textContent;

    let categoryArr = categoryFieldCurrent.textContent.split(": ");
    categoryArr.shift();
    let category = categoryArr.join(": ");

    let contentArr = contentFieldCurrent.textContent.split(": ");
    contentArr.shift();
    let content = contentArr.join(": ");

    titleField.value = title;
    categoryField.value = category;
    contentField.value = content;

    parent.remove();
  }

  function onClickApprove(event) {
    if (event) {
      event.preventDefault();
    }

    let parent = event.target.parentElement;

    let second = parent.querySelectorAll("button")[0];
    let third = parent.querySelectorAll("button")[1];

    parent.removeChild(second);
    parent.removeChild(third);
    parent.remove();

    publishedList.appendChild(parent);
  }

  function clearFields() {
    titleField.value = "";
    categoryField.value = "";
    contentField.value = "";
  }
}
