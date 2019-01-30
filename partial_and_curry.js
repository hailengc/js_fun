// Partial
// you could implement partial use bind
// primStudent = user.getInfo.bind(user, "primary")
// primStudent.getInfo("grade_3")

// or implement one as:
function partial(func, ...argsBound) {
  return function(...args) {
    return func.call(this, ...argsBound, ...args);
  };
}

function multiply(times, a) {
  return times * a;
}

const double = partial(multiply, 2);
const triple = partial(multiply, 3);
console.log(double(3));
console.log(triple(3));

// Currying
// is translating a function from callable as f(a, b, c) into callable as f(a)(b)(c).

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      // able to call if parameters are fully provided
      return func.call(this, ...args);
    } else {
      // return a partial
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sendMail(from, title, to) {
  return `Mail from: ${from}, title: ${title}, to: ${to}`;
}

const sm = curry(sendMail);
console.log(sm("hlcao", "hello", "Jack"));

const hlcaoMail = sm("hlcao");
console.log(hlcaoMail("hello", "Mary"));

const hlcaoHelloMail = hlcaoMail("hello");
console.log(hlcaoHelloMail("WORLD"));
