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

function evalCommand() {
  const cmd = document.getElementById("command-input").value;

  if (commands.hasOwnProperty(cmd)) commands[cmd].action();
  else print("Invalid command.");

  // Remove the previous input box
  removeElementById("command-input");
  // Create a new input box
  print(inputCode);
  // Focus it
  focusInput();
}
