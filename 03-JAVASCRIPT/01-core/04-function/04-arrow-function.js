// 화살표 함수 기본 문법

// function 대신 화살표를 이용해서 함수를 더 짧게 쓰자
// 자바 람다 : (a, b) -> a + b (함수형 인터페이스)

var message;

// 표현식 원본
message = function () {
  return "hello world";
};
console.log(message()); // 결과: hello world

// 2번 function을 지우고 화살표를 사용할 수 있다.
message = () => {
  return "hello world";
};
console.log(message()); // 결과: hello world

// 3번 구현부가 한 줄이면 중괄호와 return을 생략 가능하다.
message = () => "hello world";
console.log(message()); // 결과: hello world

// 4번 매개변수
message = (val1, val2) => `hello world ${val1}, ${val2}`;
console.log(message("bear", "cat")); // 결과: hello world bear, cat

// 5번 매개변수가 한 개 있을 때, 소괄호 생략 가능
message = (val1) => `hello world ${val1}`;
console.log(message("bear")); // 결과: hello world bear

var createUser = (id, name) => ({ id, name });
console.log(createUser(1, "bear")); // 결과: { id: 1, name: 'bear' } -> 객체 리터럴을 return함
