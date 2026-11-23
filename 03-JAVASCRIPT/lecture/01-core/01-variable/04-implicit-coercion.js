// 암묵적 타입 변환

// 1. 문자열 변환
// +는 하나라도 문자열이면 '연결'로 동작
console.log(10 + "20"); // 출력 결과 1020
console.log(10 - "5"); // 출력 결과 5

// 2. 숫자로 변환
console.log("10" * 5); // 출력 결과 50
console.log(10 * "JavaScript"); // 출력 결과 NaN (숫자로 바꿀 수 없을 때)

// Truthy 와 Falsy : Boolean

// Falsy 값 6개 제외 나머지는 Truthy 값임.
// Falsy : false, 0, '', null, undefined, NaN -> false로 취급된다.
// Truthy : 그 외 나머지

var variable = "javascript";

variable = "";
variable = 0;
variable = null;
variable = []; // 빈 배열
variable = {}; // 빈 객체

if (variable) {
  console.log("Truthy 있으면 참");
} else {
  console.log("Falsy 없으면 거짓");
}

