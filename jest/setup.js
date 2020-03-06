const error = console.error;

console.error = (...args) =>
  /(test)/m.test(args[0]) ? void 0 : error(...args);
