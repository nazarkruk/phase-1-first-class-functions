receivesAFunction = (call, str) => {
    return call() + str;
}

function returnsANamedFunction() {
    return function test () {
        console.log(`test`);
      };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(`anon`);
      };
}