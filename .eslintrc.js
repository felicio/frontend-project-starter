'use strict'

// Put this file to the directory where your browser code is located. This could be the root
// directory, or a subdirectory if your project consists of both node.js and browser code.

module.exports = {
  extends: [
    '@strv/javascript/environments/react/v15',
    '@strv/javascript/environments/react/optional',
    '@strv/javascript/coding-styles/recommended'
  ],
  rules: {
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: false
      }
    ]
  }
}
