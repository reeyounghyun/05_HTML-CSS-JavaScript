// 단축 평가

/**
 * Java
 * a() && b() 일 때, a() 가 false이면 b() 호출하지 않는다. -> 결괏값이 boolean
 * JavaScript
 * a() && b() 일 때, a() 가 false이면 b() 호출하지 않는다. -> 결괏값을 피연산자 중 한 개를 돌려줌
 */

// 논리연산의 결과를 결정하는 !!첫번째!! 피연산자를 반환
console.log("apple" || "banana"); // apple 출력
console.log(false || "banana"); // banana 출력

console.log("===end 연산====");

console.log("apple" && "banana"); // banana 출력
console.log("banana" && false); // false 출력

console.log("===활용====");

var num = 1;

if (num % 2 === 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다.");
}

// 단축 평가로 if-else 대신 쓰기
num % 2 === 0 && console.log("짝수입니다."); // 왼쪽이 참일 때
num % 2 === 0 || console.log("홀수입니다."); // 왼쪽이 거짓일 때

// 변수가 null 또는 undefined인지 확인할 때
var someObject = null;

// someObject 에 값이 들어옴 (외부 API 호출)
var val = someObject && someObject.value; // &&가 객체가 있을 때만 값을 꺼내라 라는 의미임
