# connect-fonts-firamono

Fira Mono fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-firamono");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/firamono-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/firamono-bold,firamono-medium,firamono-regular/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* firamono-bold
* firamono-medium
* firamono-regular

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/firamono-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* latin

5. Set your CSS up to use the new font by using the "Fira Mono" font-family.
```
    body {
      font-family: 'Fira Mono', 'sans-serif', 'serif';
    }
```

## Font Info
Fira Mono

* Copyright: Digitized data copyright © 2012-2014, The Mozilla Foundation and Telefonica S.A.
* Trademark: Fira Mono is a trademark of The Mozilla Corporation.
* Designer: Carrois Corporate & Edenspiekermann AG
* Designer URL: http://www.carrois.com 
* Vendor: Carrois Corporate GbR & Edenspiekermann AG
* Vendor URL: http://www.carrois.com

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-firamono
* Repo: https://github.com/shane-tomlinson/connect-fonts-firamono.git
* Bugs: https://github.com/shane-tomlinson/connect-fonts-firamono/issues

## Font pack author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* @shane_tomlinson


## License

Fonts: Licensed under version 1.1 of the SIL Open Font License

  http://scripts.sil.org/OFL

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/

