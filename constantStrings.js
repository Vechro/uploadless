// The code injected to add a new command input box
const inputCode = `<span style="color: aqua">> </span><input id="command-input" onkeypress="toggleCommandIfEnter(event.key);">`;
const imgCode = `<img src="data:image/png;base64, __replace__">`;

const imgExts = ["png", "jpg"];

const warning = `WARNING!
This site is made for small files.
If you attempt to upload a file larger than a couple megabytes, even on a good PC,
it will cause high RAM usage, page slowdowns, and stupidly long URLS.
If you understand this and wish to upload your file, please enter \`yes\`.`;

const suggestDownload = `Hello!
Welcome to uploadless.me. It appears that you have clicked on a download link.
If you wish to download the file now, type \`yes\`.`;