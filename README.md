# connect-fonts-firamono

Fira Mono fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```
const font_pack  = require("connect-fonts-firamono");
```

3. Add a middleware by calling the `setup` function.
```
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```
    <link href="/en/firamono-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```
    <link href="/en/firamono-bold,firamono-regular/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* firamono-bold
* firamono-regular

5. Set your CSS up to use the new font by using the "Fira Mono" font-family.
```
    body {
      font-family: 'Fira Mono', 'sans-serif', 'serif';
    }
```

## Font Info
Fira Mono

* Copyright: Digitized data copyright Â© 2012-2013, The Mozilla Foundation and Telefonica S.A.
* Trademark: Fira Mono is a trademark of The Mozilla Foundation.
* Designer: Carrois Corporate & Edenspiekermann
* Designer URL: http://www.carrois.com
* Vendor: Carrois Corporate GbR & Edenspiekermann AG
* Vendor URL: http://www.edenspiekermann.com

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-firamono
* Repo: https://github.com/shane-tomlinson/connect-fonts-firamono
* Bugs: https://github.com/shane-tomlinson/connect-fonts-firamono/issues

## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* @shane_tomlinson


## License

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/

Fonts: Licensed under version 1.1 of the SIL Open Font License

  http://scripts.sil.org/OFL

