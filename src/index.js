import { evalCommand } from "./commands.js";
window.evalCommand = evalCommand;

import { renderBase64ImageToElement, downloadBase64, upload } from "./uploadDownload.js";
import { getHashData, focusInput } from "./misc.js";
import { inputCode, imgExts } from "./constantStrings";

window.onload = () => {
  const hash = getHashData();

  if (hash !== null) {
    const name = hash.name;
    const split = name.split(".");
    const ext = split[split.length - 1];
    const data = hash.data;

    if (imgExts.includes(ext))
      renderBase64ImageToElement(data, document.getElementById("img-box"));
    else downloadBase64(name, data);
  }

  document.getElementById("commands").innerHTML = "<br />" + inputCode;
  focusInput();

  const fileInput = document.getElementById("file-input");
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      upload(file.name, new Uint8Array(reader.result));
    };
    reader.readAsArrayBuffer(file);
  });
};
