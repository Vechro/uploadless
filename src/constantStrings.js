// The code injected to add a new command input box
export const inputCode = `<span style="color: aqua">> </span><input id="command-input" onkeypress="if (event.key === 'Enter') evalCommand();">`;
export const imgCode = `<img src="data:image/png;base64, __replace__">`;

export const imgExts = ["png", "jpg", "jpeg", "gif", "tiff"];

export const warning = `WARNING!
This site is made for small files.
If you attempt to upload a file larger than ~1 MiB, even on a good PC,
it will cause high RAM usage, page slowdowns, and stupidly long URLS.
The upload prompt will appear in 5 seconds.`;
