// 명시적 형변환
// - 암묵적 변환은 예측하기 어려워 명시적으로 실무에서 많이 사용한다.

// 문자열이라는 걸 알려줘야 한다.
console.log("=== 문자열 명시적 형변환 ===");
console.log(String(10)); // 출력 결과 : 10
console.log(String(true)); // 출력 결과 : true
console.log(String(null)); // 출력 결과 : null

console.log((10).toString()); // 출력 결과 : 10

// 숫자
console.log("=== 숫자 명시적 형변환 ===");

console.log(Number("10")); // 출력 결과 : 10
console.log(Number("10.5")); // 출력 결과 : 10.5
console.log(Number(true)); // 출력 결과 : 1

// parseInt() : 정수 부분만 변환
console.log(parseInt("10.5")); // 출력 결과 : 10

console.log(Number("10.5px")); // NaN
console.log(parseInt("10.5px")); // 10 : 앞에서부터 읽을 수 있는 만큼만 변환된다.

console.log("=== Boolean 명시적 형변환 ===");
console.log(Boolean("JavaScript")); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false

// 더 자주 쓰는 표현
console.log(!!""); // false
