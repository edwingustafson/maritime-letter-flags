# maritime-letter-flags

> React component rendering letters as international maritime signal flags

![Hello, world!](helloWorld.png)

[Inspired by a resort town storefont.](https://goo.gl/maps/GVLpvs248RFyLcYh8)

[Flag images from Wikimedia Commons.](https://commons.wikimedia.org/wiki/Category:International_Code_of_Signals_(Series_4))

[![NPM](https://img.shields.io/npm/v/maritime-letter-flags.svg)](https://www.npmjs.com/package/maritime-letter-flags) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save maritime-letter-flags
```

## Usage

```tsx
import React, { Component } from 'react'

import MaritimeLetterFlags from 'maritime-letter-flags'
import 'maritime-letter-flags/dist/index.css'

class Example extends Component {
  render() {
    return <MaritimeLetterFlags
      letters={true}
      text={'Hello, world!'}
    />;
  }
}
```

## License

MIT © [edwingustafson](https://github.com/edwingustafson)
