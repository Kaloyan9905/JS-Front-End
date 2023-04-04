function attachEvents() {
  const buttonSend = document.getElementById("submit");
  const buttonRefresh = document.getElementById("refresh");

  buttonSend.addEventListener("click", onClickSend);
  buttonRefresh.addEventListener("click", onClickRefresh);
  const BASE_URL = `http://localhost:3030/jsonstore/messenger`;

  async function onClickSend(event) {
    const nameInput = document.querySelectorAll(
      "#controls div:nth-child(1) input"
    )[0];
    const messageInput = document.querySelectorAll(
      "#controls div:nth-child(2) input"
    )[0];

    const name = nameInput.value;
    const message = messageInput.value;

    nameInput.value = "";
    messageInput.value = "";

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: name,
          content: message,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function onClickRefresh(event) {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      const messagesDisplay = document.getElementById("messages");
      messagesDisplay.textContent = "";

      for (let index in data) {
        if (!(data[index].content === "" || data[index].author === "")) {
          messagesDisplay.textContent += `${data[index].author}: ${data[index].content}\n`;
        }
      }
      messagesDisplay.textContent = messagesDisplay.textContent.trim();
    } catch (error) {
      console.error(error);
    }
  }
}

attachEvents();
