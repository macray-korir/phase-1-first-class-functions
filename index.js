// Define the receivesAFunction function
function receivesAFunction(callback) {
  callback();
}

// Define the returnsANamedFunction function
function returnsANamedFunction() {
  return function namedFunction() {
  };
}

// Define the returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
  return function () {
  };
}