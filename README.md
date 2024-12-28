# Battlefield Page

Battle field server info page made using react, HTML, CSS.

## Run Locally

Clone the project

```bash
  git clone https://github.com/cheater108/battlefield-landing
```

Go to the project directory

```bash
  cd battlefield-landing
```

Install dependencies for both client and server

```bash
  cd ./client
  npm install
  cd ../server
  npm install
```

Build the client

```bash
  cd ../client
  npm run build
```

Copy dist folder to server

```bash
  cp -r dist ../server
```

Start the server

```bash
  cd ../server
  node index.js
```

## Tech Stack

**Client:** React, HTML, CSS

**Server:** Express
