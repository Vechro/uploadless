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

    if (prompt(warning) === "yes") {
      let reader = new FileReader();

      reader.onload = () => {
        upload(file.name, new Uint8Array(reader.result));
      };

      reader.readAsArrayBuffer(file);
    }
  });
};
