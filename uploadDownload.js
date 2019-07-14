// Gets base64 string and downloads it as a byte stream
function downloadBase64(name, data) {
  let a = document.createElement("a");
  a.href = window.URL.createObjectURL(
    new Blob([base64ToByteArray(data)], { type: "application/octet-stream" })
  );
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Takes an element and renders base64 data to it as an image
function renderBase64ImageToElement(data, element) {
  element.innerHTML = imgCode.replace("__replace__", data);
}

// Gets file, converts it to base64, and sets it as the URL
function upload(name, byteStream) {
  parent.location.hash = JSON.stringify({
    name: name,
    data: byteArrayToBase64(byteStream)
  });
}
