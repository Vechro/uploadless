import { evalCommand } from "./commands.js";

export function copyToClipboard(text) {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

export function focusInput() {
  document.getElementById("command-input").focus();
}

// like the python print export function, but for this console
export function print(text) {
  document.getElementById("commands").innerHTML += `<br />${text}`;
}

export function removeElementById(id) {
  const element = document.getElementById(id);
  element.parentNode.removeChild(element);
}

export function getHashData() {
  // substring to remove the hash
  const hash = parent.location.hash;
  if (hash !== "") return JSON.parse(decodeURI(hash.substring(1)));
  return null;
}