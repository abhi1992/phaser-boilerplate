# Tic Tac Toe
This is a small tic tac toe game designed in es6.



## Technology

The project is based on [Node.js](https://nodejs.org/en/), if you are not familiar with it I'd suggest to check it out first.
If you are familiar just have a look at **package.json** and gulp tasks in **tasks** folder.
If you are familiar and lazy just run:

```sh
npm i && npm run dev
```

To build production:

```sh
npm run build
```

## Structure

Source files are in **src** folder

Gulp task are in **tasks** folder as separate files in **dev** and **prod** folders. There are some redundancy but in this way it is very easy to maintain, scale and copy tasks from one project to another.

Development and production builds are going to **builds** folder.

## Features

In production mode (dev mode is nearly just copying files into builds/dev)

- optimizing images
- minifying html, js and json
- file revisioning to prevent browser cache

## License

MIT
