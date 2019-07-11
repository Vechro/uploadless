const inputCode =
    `<span style="color: aqua">> </span><input id="cmdInput" onkeypress="toggleInputIfEnter(event.key);">`;

const help =
    `Usage: 
    \`upload\` to upload a file.
    \`download\` to download current file from URL.
    \`clear\` clears the command line.
    \`help\` shows what you are currently seeing.`;

const warning =
    `WARNING!
Uploading this file will temporarily require as much RAM as the size of the file,
so if you have less RAM avaliable than the size of the file you wish to upload, do not proceed.
Type \`yes\` to continue.`;

function evalCmd() {
    const cmdInput = document.getElementById("cmdInput");
    const cmdFull = cmdInput.value;
    cmdInput.parentNode.removeChild(cmdInput);

    const cmdArr = cmdFull.split(" ");
    const cmd = cmdArr[0];

    switch (cmd) {
        case "upload":
            if (prompt(warning) === "yes")
                document.getElementById("file-input").click();
            break;
        case "download":
            const data = parent.location.hash.substring(1);
            downloadBase64(data);
            break;
        case "clear":
            commands.innerHTML = "";
            break;
        case "help":
            appendCmd(help);
            break;
        default:
            appendCmd("Invalid command.");
            break;
    }

    appendCmd(inputCode);
    focusInput();
}

window.onload = () => {
    commands.innerHTML = inputCode;
    focusInput();

    const fileInput = document.getElementById("file-input");
    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        let reader = new FileReader();

        reader.onload = () => {
            upload(reader.result);
        };

        reader.readAsArrayBuffer(file);
    });
};