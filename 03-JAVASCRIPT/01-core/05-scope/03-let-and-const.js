/**
 * let : 변수 선언 (값을 변경 할 수 있다)
 * const : 변수 선언 (값을 변경 할 수 없다)
 *
 *
 * -> 기본적으로 const를 사용하고, 값을 변경할 때 let을 사용
 * -> var는 사용하지 않는다.
 * **/

// 1. 중복 선언이 허용되는 문제 해결
let msg = "안녕하세요";
console.log(msg);

// let msg = "안녕히가세요"; // 중복 선언을 할 수 없다.
// console.log(msg);

// 2. 함수레벨 스코프 문제
for (let i = 0; i < 10; i++) {
  // let은 함수 안에서 호출하여 사용 할 수 있다.
}
//console.log(i);

// 3. 변수 호이스팅
console.log(test);

let test = "반갑습니다~";

// const를 사용하는 것
// 재할당 금지
const DISCOUNT_RATE = 0.15;
// DISCOUNT_RATE = 0.5;

// 선언과 동시에 초괴화를 해야함.
const y = "";

// const로 선언해도 객체의 내용은 바뀐다.
// 변수를 객체나 배열을 담으면 참조값을 저장한다.
const student = { name: "홍길동", age: 20 };

student.name = "유관순";
console.log(student);

// student = {}; 주소를 바꾸는 것은 안됨
