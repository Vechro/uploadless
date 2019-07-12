// The code injected to add a new command input box
const inputCode = `<span style="color: aqua">> </span><input id="command-input" onkeypress="toggleCommandIfEnter(event.key);">`;

const warning = `WARNING!
This site is made for small files.
If you attempt to upload a file larger than a couple megabytes, even on a good PC,
it will cause high RAM usage, page slowdowns, and stupidly long URLS.
If you understand this and wish to upload your file, please enter \`yes\`.`;

const suggestDownload = `Hello!
Welcome to uploadless.me. It appears that you have clicked on a download link.
If you wish to download the file now, type \`yes\`.`;

const commands = {
  upload: {
    desc: "prompts you to open a file and 'uploads' it.",
    action: () => document.getElementById("file-input").click()
  },
  download: {
    desc: "downloads the file from the current URL.",
    // Substring it to get rid of the initial `#` character
    action: () => downloadBase64(getHashData())
  },
  copyDownloadLink: {
    desc: "copies the current download link to your clipboard.",
    action: () => copyToClipboard(window.location.href)
  },
  help: {
    desc: "shows the description of every command.",
    action: () => {
      let helpText = "Usage:\n";
      Object.entries(commands).forEach(
        ([key, val]) => (helpText += `\`${key}\` ${val.desc}\n`)
      );

      print(helpText);
    }
  }
};
