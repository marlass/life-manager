// require.context(directory, useSubdirectories = false, regExp = /^\.\//)
var context = require.context(".", true, /-test.jsx?$/);
context.keys().forEach(context);
