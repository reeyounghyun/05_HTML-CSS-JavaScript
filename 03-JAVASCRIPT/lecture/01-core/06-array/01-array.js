// 배열
// 여러 개의 값을 순차적으로 나열한 자료구조
// 자바스크립트에서의 배열
// 크기가 자유롭게 늘어남, 아무 값이나 섞어 담을 수 있다.

const fruits = ["바나나", "복숭아", "키위"];
console.log(fruits);
console.log(typeof fruits); // 결과: object

console.log(fruits[0]); // 결과: index로 바나나가 출력됨

console.log(fruits[3]); // 결과: 인덱스를 벗어나면 undefined가 나옴

// 배열의 길이
console.log(fruits.length); // 결과: 3

// 반복을 통해 순회 출력
for (const fruit of fruits) {
  console.log(fruit);
}

// 무엇이든 담을 수 있다.
// 타입을 섞어도 오류가 나지 않는다.
const mixed = ["홍길동", 20, true, null, undefined, [], {}, function () {}];
console.log(mixed);

// 문법상은 가능하지만 사용하지 않는것을 권장한다.
const users = [
  { id: 1, name: "유관순" },
  { id: 2, name: "홍길동" },
];

console.log(users.map((user) => user.name));

// map은 고차함수이다? 콜백함수이다?
// 고차 함수: 함수를 받는 쪽이에요. 매개변수로 함수를 받는 함수예요.
// 콜백 함수: 함수에 넘겨지는 쪽이에요. 매개변수에 들어가는 함수예요.
// map은 고차함수 / ((user) => user.name) 콜백함수
// 함수는 일급객체 이기 때문이다.
// 일급객체? => 함수가 숫자나 문자열처럼 값으로 취급되니까 다른 함수에 넘길 수 있다