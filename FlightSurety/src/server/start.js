// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "esmodules": true
          }
        }
      ]
    ],
    "plugins": [
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties"
    ]
  }
  );
  
  // Import the rest of our application.
  module.exports = require('./index.js')