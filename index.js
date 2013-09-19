const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "firamono-bold": {
        "fontFamily": "Fira Mono",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Fira Mono Bold", "FiraMono-Bold" ]
      },
      "firamono-regular": {
        "fontFamily": "Fira Mono",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Fira Mono", "FiraMono" ]
      }
  }
};
