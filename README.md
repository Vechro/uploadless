uploadless.me
=============

Welcome to `uploadless.me`, the file hosting service that doesn't actually upload anything.

#### What can it do / how can I use it?
uploadless takes a file, calculates the base64 of it, and stores that as well as the files name in the browser URL.

This URL can then be sent to someone that when clicked will:

If the file is an image:
    display the image

If the file is not an image:
    download the file

#### What can't it do?
Handle files larger than ~1MiB.
The site is made as a way to quickly send / recieve small files, NOT large files or (for the most part) images.

Produce short urls.
If you wish to make the URLs generated shorter they will usually work with the most common URL shorteners.
However, currently in the works are a URL compressor (which is written in Rust) and a URL shortener made specifically for uploadless.

#### Contributing
All contributions to the project are welcome, just please be descriptive with what you solved with your pull request if it is not referencing a current issue.

To build the project, you will need python 2 or 3 (just make sure that `python` is added to your PATH), parcel (`npm i parcel -g`) and gh-pages (`npm i gh-pages -g`).
Once your changes are made, running `npm run build` will bundle the app and push the production code to the `gh-pages` branch.