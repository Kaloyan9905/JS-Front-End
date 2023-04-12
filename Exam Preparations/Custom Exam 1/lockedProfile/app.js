async function lockedProfile() {
  function createProfileTemplate(count, id, object) {
    const div = document.createElement("div");
    div.classList = "profile";

    div.innerHTML = `
    <img src="./iconProfile2.png" class="userIcon" />
    <label>Lock</label>
    <input type="radio" name="user${count}Locked" value="lock" checked>
    <label>Unlock</label>
    <input type="radio" name="user${count}Locked" value="unlock"><br>
    <hr>
    <label>Username</label>
    <input type="text" name="user${count}Username" value="" disabled readonly />
    <div class="user${count}Username">
        <hr>
        <label>Email:</label>
        <input type="email" name="user${count}Email" value="" disabled readonly />
        <label>Age:</label>
        <input type="email" name="user${count}Age" value="" disabled readonly />
    </div>
    <button id="${object._id}">Show more</button>`;

    document.getElementById("main").appendChild(div);

    document.querySelectorAll(`input[name=user${count}Username]`)[0].value =
      object.username;
    document.querySelectorAll(`input[name=user${count}Email]`)[0].value =
      object.email;
    document.querySelectorAll(`input[name=user${count}Age]`)[0].value =
      object.age;

    div.getElementsByClassName(`user${count}Username`)[0].style.display =
      "none";
  }

  BASE_URL = `http://localhost:3030/jsonstore/advanced/profiles`;
  document.getElementById("main").innerHTML = "";

  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    let counter = 1;

    for (const key in data) {
      createProfileTemplate(counter, key, data[key]);
      counter++;
    }
  } catch (error) {
    console.error(error);
  }

  let buttons = document.querySelectorAll("button");

  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", onClick);
  });

  function onClick(event) {
    parent = event.target.parentElement;
    let input = parent.querySelector("input[value=unlock]");

    if (input.checked) {
      let text = parent.querySelector("div");

      if (event.target.textContent === "Show more") {
        text.style.display = "block";
        event.target.textContent = "Hide it";
      } else {
        text.style.display = "none";
        event.target.textContent = "Show more";
      }
    }
  }
}
