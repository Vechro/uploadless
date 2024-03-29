import { byteArrayToBase64, base64ToByteArray } from "./base64.js";
import { imgCode } from "./constantStrings.js";

// Gets base64 string and downloads it as a byte stream
export function downloadBase64(name, data) {
  const a = document.createElement("a");
  a.href = window.URL.createObjectURL(
    new Blob([base64ToByteArray(data)], { type: "application/octet-stream" })
  );
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Takes an element and renders base64 data to it as an image
export function renderBase64ImageToElement(data, element) {
  element.innerHTML = imgCode.replace("__replace__", data);
}

// Gets file, converts it to base64, and sets it as the URL
export function upload(name, byteStream) {
  parent.location.hash = JSON.stringify({
    name: name,
    data: byteArrayToBase64(byteStream)
  });
}
