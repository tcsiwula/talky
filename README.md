Talky
=========

A command line based, automaton. Think of it like a personal stackoverflow assistant.

See the associated blog post, ["Getting started with talky"](https://google.com)

## Installation

```shell
  npm install talky --save
```

## Usage

```js
  var talkyMaster = require('talky');


  var talkyClientForUser123 = talkyMaster.generate();

```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 1.0.0 Refactor to avoid double unescape and to use npm scripts instead
  of makefile.  Also add link to associated blog post.
* 0.1.0 Initial release
