// Gets a base64 string and converts it into a Uint8Array
export function base64ToByteArray(base64) {
  const binString = atob(base64);
  const len = binString.length;

  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = binString.charCodeAt(i);

  return bytes.buffer;
}

// Gets Uint8Array and converts it into a base64 string
export function byteArrayToBase64(bytes) {
  let bin = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    bin += String.fromCharCode(bytes[i]);
  }

  return btoa(bin);
}
