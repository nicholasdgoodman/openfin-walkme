# WalkMe Test Environment

## Prerequisites

This project utilizes the OpenFin CLI and a localhost web server:

```
npm install -g openfin-cli
npm install -g http-server
```

To run the project:

```
http-server -p 3001 -c-1
```

and elsewhere

```
openfin -l -c http://localhost:3001/app.json
```

## Description Functionality

This demo highlights the different ways to create OpenFin windows to leverage WalkMe, both as a in-document `<script>` tag / Snippet as well as using Preload scripts to mimic the functionality of the WalkMe Player extension.

Additionally, in order to bypass CSP rules, this demo leverages an experimental set of window Options which allow relaxing CSP rules per-window to specified domains. These settings are delcared in the manifest in this repo, but must also be supplied to each window creation options as demonstrated in the `index.html` file.
