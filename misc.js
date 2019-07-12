// If enter is pressed in command box toggle the eval function
function toggleCommandIfEnter(key) {
  if (key === "Enter") evalCommand();
}

function copyToClipboard(text) {
  let dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function focusInput() {
  document.getElementById("command-input").focus();
}

// like the python print function, but for this console
function print(text) {
  document.getElementById("commands").innerHTML += `<br />${text}`;
}

function removeElementById(id) {
  let element = document.getElementById(id);
  element.parentNode.removeChild(element);
}

function getHashData() {
  // substring to remove the hash
  return parent.location.hash.substring(1);
}