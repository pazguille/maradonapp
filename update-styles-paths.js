const replace = require('replace-in-file');

replace.sync({
  files: [
    './dist/index.html',
  ],
  from: /url\(/gi,
  to: (match) => {
    return match + './src/';
  },
});
