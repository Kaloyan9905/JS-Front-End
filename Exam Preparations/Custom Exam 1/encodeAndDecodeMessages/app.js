function encodeAndDecodeMessages() {
  const encodeButton = document.querySelectorAll(
    "#main div:nth-child(1) button"
  )[0];
  const decodeButton = document.querySelectorAll(
    "#main div:nth-child(2) button"
  )[0];
  const encodeTextArea = document.querySelectorAll(
    "#main div:nth-child(1) textarea"
  )[0];
  const decodeTextArea = document.querySelectorAll(
    "#main div:nth-child(2) textarea"
  )[0];

  encodeButton.addEventListener("click", onClickEncode);
  decodeButton.addEventListener("click", onClickDecode);

  function onClickEncode(event) {
    let message = encodeTextArea.value;
    let encodedMessage = "";

    for (let index = 0; index < message.length; index++) {
      const char = message[index];
      const ascii = char.charCodeAt(0);
      const newAscii = ascii + 1;
      const newChar = String.fromCharCode(newAscii);
      encodedMessage += newChar;
    }

    decodeTextArea.value = encodedMessage;
    encodeTextArea.value = "";
  }

  function onClickDecode(event) {
    let message = decodeTextArea.value;
    let decodedMessage = "";

    for (let index = 0; index < message.length; index++) {
      const char = message[index];
      const ascii = char.charCodeAt(0);
      const newAscii = ascii - 1;
      const newChar = String.fromCharCode(newAscii);
      decodedMessage += newChar;
    }

    decodeTextArea.value = decodedMessage;
    encodeTextArea.value = "";
  }
}
