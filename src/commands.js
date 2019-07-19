import { print, getHashData, copyToClipboard, removeElementById, focusInput } from "./misc.js";
import { downloadBase64 } from "./uploadDownload.js";
import { warning, inputCode } from "./constantStrings.js";

export const commands = {
  upload: {
    desc: "prompts you to open a file and 'uploads' it",
    action: () => {
      print(warning);
      setTimeout(() => document.getElementById("file-input").click(), 5000);
    }
  },
  download: {
    desc: "downloads the file from the current URL",
    // Substring it to get rid of the initial `#` character
    action: () => {
      const hash = getHashData();
      if (hash !== null) downloadBase64(hash.name, hash.data);
      else alert("No file currently loaded");
    }
  },
  copyDownloadLink: {
    desc: "copies the current download link to your clipboard",
    action: () => copyToClipboard(window.location.href)
  },
  help: {
    desc: "shows the description of every command",
    action: () => {
      let helpText = "Usage:\n";
      Object.entries(commands).forEach(
        ([key, val]) => (helpText += `\`${key}\` ${val.desc}.\n`)
      );

      print(helpText);
    }
  }
};

export function evalCommand() {
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
