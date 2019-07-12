// Gets base64 string and downloads it as a byte stream
function downloadBase64(data) {
  let a = document.createElement("a");
  a.href = window.URL.createObjectURL(
    new Blob([base64ToByteArray(data)], { type: "application/octet-stream" })
  );
  a.download = "download";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Gets file, converts it to base64, and sets it as the URL
function upload(arrBuff) {
  parent.location.hash = byteArrayToBase64(new Uint8Array(arrBuff));
}
