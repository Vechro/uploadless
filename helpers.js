// If enter is pressed in command box toggle the eval function
function toggleInputIfEnter(key) {
    if (key === "Enter")
        evalCmd();
}

function appendCmd(text) {
    commands.innerHTML += `<br />${text}`;
}

function focusInput() {
    document.getElementById("cmdInput").focus();
}

function base64ToByteArray(data) {
    const binString = atob(data);
    const len = binString.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++)
        bytes[i] = binString.charCodeAt(i);

    return bytes.buffer;
}

function downloadBase64(data) {
    let a = document.createElement("a");
    a.href = window.URL.createObjectURL(new Blob([base64ToByteArray(data)], { type: 'application/octet-stream' }));
    a.download = "download";
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a);
}

function upload(arrBuff) {
    const base64OfFile = btoa(String.fromCharCode(...new Uint8Array(arrBuff)));
    parent.location.hash = base64OfFile;
}