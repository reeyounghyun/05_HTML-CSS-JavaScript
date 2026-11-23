/***
 * 콜백 함수
 * - 다른 함수에 인자로 전달되어, 그 함수가 대신 호출해주는 함수
 * **/

const sayHello = () => "안녕하세요";

console.log(typeof sayHello); // 결과: function
console.log(typeof sayHello()); // 결과string

// 함수를 매개변수로 받음
function runTwice(str, callback) {
  console.log(callback(str)); // 결과: 안녕하세요
  console.log(callback(str)); // 결과: 안녕하세요
}
// 위에 콘솔이 안녕하세요 호출되는 이유: sayHello를 콜백으로 넘김 →
// runTwice가 대신 두 번 호출해서 "안녕하세요" 두 번 출력

runTwice("굿모닝", (str) => `안녕하세요 + ${str}`);

/*******/
/**고차함수: 함수를 인자로 받거나, 함수를 반환하는 함수 (runTwice)*/

// 반환된 함수 -> 자신이 생성될때의 변수를 기억한다. (클로저)
function makeMultiplier(factor) {
  return function (n) {
    return n * factor;
  };
}

const double = makeMultiplier(2); // 받은 수에 2를 곱하는 함수
console.log(double(5)); // double(5)를 호출

//
const makeAdder = (x) => {
  return (y) => {
    return x + y;
  };
};

const makeAdd = (x) => (y) => x + y;
