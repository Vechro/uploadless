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
