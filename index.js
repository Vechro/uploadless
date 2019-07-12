window.onload = () => {
  const hash = getHashData();
  if (hash !== "")
    if (prompt(suggestDownload) === "yes")
      downloadBase64(hash);

  document.getElementById("commands").innerHTML = "<br />" + inputCode;
  focusInput();

  const fileInput = document.getElementById("file-input");
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (prompt(warning) === "yes") {
      let reader = new FileReader();

      reader.onload = () => {
        upload(reader.result);
      };

      reader.readAsArrayBuffer(file);
    }
  });
};
