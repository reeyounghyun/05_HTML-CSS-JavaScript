// 중첩 함수
// 함수 안의 함수를 의미한다.

function outer() {
  // 바깥 함수
  var outerVal = "외부 함수";

  function inner() {
    // 안쪽 함수 = 중첩 함수
    var innerVal = "내부 함수";

    console.log(outerVal, innerVal);
  }
  inner();
}
outer();
// Scope가 다름 -> 외부에서는 내부 함수도, 내부 함수의 변수도 볼 수가 없다.
// inner();

// 함수 자체를 return

// 숫자를 세는 함수
//
function createCounter(start) {
  var count = start;

  return function () {
    count = count + 1;
    return count;
  };
}

var counter1 = createCounter(10);
console.log(counter1()); // 결과 : 11
console.log(counter1()); // 결과 : 12
console.log(counter1()); // 결과 : 13
// 점점 증가하는 걸 보면 -> 값을 기억하고 있다는 의미임.

// 클로저(Closure)
// 내부 함수가 자신이 선언된 외부 스코프의 변수를 기억하고
// 외부 함수의 실행이 끝난 뒤에도 (외부 함수에 있는)변수에 접근할 수 있는 것

var counter2 = createCounter(20);
console.log(counter2()); // 결과 : 21
console.log(counter2()); // 결과 : 22
console.log(counter2()); // 결과 : 23

// 내부함수의 호출을 숨긴다.
// 내부함수가 외부함수의 변수를 기억한다.
// 외부함수를 여러번 호출해도 서로 간섭하지 않는다.
