/**
 * 콜백 함수 : 다른 함수의 매개변수로 전달되는 함수
 * 고차 함수 : 함수를 인자로 받거나 함수를 반환하는 함수
 */

// 콜백 함수1
function increase(value) {
  return value + 1;
}
// 콜백 함수2
function decrease(value) {
  return value - 1;
}

// 고차 함수 : 함수(func)를 인자로 받는다
// -> 콜백함수를 언제 호출할지 결정, 필요하다면 인자도 넘겨준다.
function apply(func, value) {
  // 받은 함수를 여기서 대신 호출한다 -> func(value) = increase(5)
  return func(value);
}

// increase -> func,
// 5 -> value 로 전달됨
// increase 뒤에 ()가 없음 -> 함수를 실행하지 않고 함수 자체를 넘긴다 (콜백 함수)
console.log(apply(increase, 5)); // 결과 : 6
console.log(apply(decrease, 5)); // 결과 : 4

console.log(apply((value) => value ** 2, 5));
console.log(
  apply(function (value) {
    return value ** 2;
  }, 5),
);
