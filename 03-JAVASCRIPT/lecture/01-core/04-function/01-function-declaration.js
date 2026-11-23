// 함수
// -> 코드 뭉치

// 함수 선언문으로 함수를 만들었다.
// 함수명 생략이 안 된다. => 왜? 호출을 할 수 없어서~~~~
function hello(name) {
  return `${name}님 안녕하세요!`;
}

console.log(hello("홍길동"));

// 값처럼 쓸 수 있는 객체 일급 객체(first-class object)
// - 변수에 할당할 수 있다.
// - 함수의 인자로 전달할 수 있다.
// - 함수의 반환값으로 사용할 수 있다.

// 표현식 -> 리터럴로 함수를 만들어 변수에 할당하는 방식
var hello = function (name) {
  return `${name}님 안녕하세요!`;
};

console.log(hello("홍길동"));
