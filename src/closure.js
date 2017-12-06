// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return () => ++count;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    if (n === count) return null;
    count++;
    return cb(...args);
  };
};

/* STRETCH PROBLEM */
const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  let cache = {};
  return (...arg) => {
    if (arg in cache) {
      cache = arg;
    } else {
      cache[arg] = cb(...arg);
      cache = cache[arg];
    }
    return cache;
  };
  // const cache = {};
  // const slice = Array.prototype.slice;
  // let args = arguments;
  // args = args.slice;
  // console.log('THIS IS ARGS ', args);
  // if (!args) {
  //   return () => cb(args);
  // }
  // if (args in cache) {
  //   console.log('THIS IS CACHE[ARGS] ', cache[args]);
  //   console.log('THIS IS CACHE[ARGS] DESTRUCTURED ', ...cache[args]);
  //   return cb(...cache[args]);
  // }
  // return () => cb(args);
  // const cache = {};
  // if (!arguments) {
  //   return () => cb();
  // }
  // const args = [...arguments];
  // args.forEach((item) => {
  //   if (item && cache.item) {
  //     return;
  //   }
  //   cache.item = item;
  // });
  // return () => cb(args);
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
