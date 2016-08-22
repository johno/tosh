# ⊡ tosh

Build out your React UI with a nostalgic flair.

![screenshot_2016-08-19_14 17 51_720](https://cloud.githubusercontent.com/assets/1424573/17823784/9878e2b6-661b-11e6-92d3-6f67d6b8b3a6.png)

## Installation

```sh
npm install tosh --save
```

## Usage

```js
import Window, { WindowHeader } from 'tosh/window'

export default () => (
  <Window>
    <WindowHeader children="Hello, world!" />
    <p style={{lineHeight: '1.5', maxWidth: '32rem'}}>
      The Lisa is a personal computer introduced by Apple Computer Inc. on January 19, 1983.
      It was one of the first personal computers to offer a graphical user interface (GUI) in a machine aimed at individual business users.
    </p>
  </Window>
)
```

## Related

- <http://www.jagshouse.com/lisa2.html>
- <http://jon.gold>
- <http://jxnblk.com/rebass/>
- <https://github.com/jxnblk/cxs>
- <http://tachyons.io>

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

***

> Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).
