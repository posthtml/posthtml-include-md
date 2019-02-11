
# posthtml-include-md
[![package version](https://img.shields.io/npm/v/posthtml-include-md.svg?style=flat-square)](https://npmjs.org/package/posthtml-include-md)
[![package downloads](https://img.shields.io/npm/dm/posthtml-include-md.svg?style=flat-square)](https://npmjs.org/package/posthtml-include-md)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/posthtml-include-md.svg?style=flat-square)](https://npmjs.org/package/posthtml-include-md)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Include markdown plugin for PostHTML. Based on [posthtml-include](https://github.com/posthtml/posthtml-include)

## Table of Contents

- [posthtml-include-md](#posthtml-include-md)
    - [Table of Contents](#table-of-contents)
    - [Install](#install)
    - [Usage](#usage)
    - [Configuration](#configuration)
    - [Contribute](#contribute)
    - [License](#license)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install posthtml-include-md
$ # OR
$ yarn add posthtml-include-md
```

## Usage

```js
const { readFileSync } = require('fs')

const posthtml = require('posthtml')
const includeMD = require('posthtml-include-md')

const html = readFileSync('index.html')

posthtml([ include({ encoding: 'utf8' }) ])
    .process(html)
    .then((result) => console.log(result.html))
```

In the HTML:

```html
<html>
<head>
    <title>index.html</title>
</head>
<body>
    <markdown src="posts/hello.html"></markdown>
</body>
</html>
```

## Configuration


- `root`: Root folder path for include. Default `./`
- `encoding`: Default `utf-8`

This plugin uses [marked.js](https://marked.js.org) to parse markdown files. All of [marked.js](https://marked.js.org)'s [configuration options](https://marked.js.org/#/USING_ADVANCED.md#options) can be passed.

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    