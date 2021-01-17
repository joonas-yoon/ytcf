# YTCF

![Latest version](https://img.shields.io/chrome-web-store/v/jdiikkhlhlgndjllhoinidnkbgkjfepe) ![Chrome 55+](https://img.shields.io/badge/chrome-55%2B-green]) ![Whale 1.4+](https://img.shields.io/badge/whale-1.4%2B-green])

YouTube Comments Language Filter

[![Chrome Web Store](https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/UV4C4ybeBTsZt43U4xis.png)](https://chrome.google.com/webstore/detail/youtube-comment-language/jdiikkhlhlgndjllhoinidnkbgkjfepe) [![Naver Whale Store](docs/images/whalestore-sm.png)](https://store.whale.naver.com/detail/iphmcbbipommlpkmgffhohlkomhakcel)

## What this is

![how to use](docs/images/preview.gif)

## How to install

[How to Install Extensions From Outside the Chrome Web Store](https://www.howtogeek.com/120743/how-to-install-extensions-from-outside-the-chrome-web-store/)

## How to Build

First, it needs `npm` packages. thus you'd like to install them.

```
npm install
```

In `main` branch, it does not need to build scripts. But if you want for some reason (e.g. to convert ES6), you can build project with following command:

```
npm run build
```

After build, you can find scripts at `js/build` directory.

also you can improve your code with lint checks as following command:

```
npm run lint
```

It will format the codes and show warnings and errors.

## How to detect language?

This extension detects language using [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/i18n/) and it is also [a part](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n) of javascript APIs for browser extension by Mozilla.

## License

[YouTube Comment Filter](https://github.com/joonas-yoon/ytcf/) are released under [MIT license](https://github.com/joonas-yoon/ytcf/blob/master/LICENSE).
