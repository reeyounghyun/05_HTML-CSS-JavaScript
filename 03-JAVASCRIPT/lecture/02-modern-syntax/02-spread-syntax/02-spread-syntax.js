/**
 * spread 문법 -> 전개문법
 *
 * - 하나로 뭉쳐있는 값의 집합을 펼쳐서 개별값의 목록으로 만든다.
 */

// 배열이 아니라 숫자 목록을 인자로 받는다.
console.log(Math.max(10, 30, 20));

const arr = [10, 20, 30];
console.log(Math.max(arr)); // NaN: 숫자 연산을 못한다.
console.log(Math.max(...arr)); // 스프레드 문법

const arr1 = [10, 30, 20];
const arr2 = [100, 300, 200];

console.log(Math.min(...arr1, ...arr2));
console.log(Math.min(10, 30, 20, 100, 300, 200));

// 배열을 바꾸는것인가? X
console.log(arr1);

// 객체 리터럴에서도 펼치기
// 일반 객체는 Iterable가 아니라 펼칠 수 없음.
// 객체 리터럴 안에서 객체를 펼치는것은 가능
const user = { name: "홍길동", age: 20 };

// console.log(...user); //  Spread syntax requires ...iterable

// 기본값을 준비하고, 같은 값이 있으면 나중값으로 덮어씌울때
console.log({...user, age: 21});
console.log({...user, cuty: '서울'});

const defaults = { size: "md", color: "red" };
const options = { color: "blue" };

console.log({ ...defaults, ...options });

