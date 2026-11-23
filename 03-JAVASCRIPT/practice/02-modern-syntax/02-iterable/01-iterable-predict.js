/* 문제 01. 이터러블인 것과 아닌 것
   유형 : 출력 예측 | 난이도 : ★☆☆

   [1] 각 줄의 결과를 예상해서 적어 보자.
   [2] 주석 처리된 줄을 풀면 어떻게 될지 예상한다.

   of -> 값 / 배열 문자열
   for in -> 키(이름,번호). 객체
*/

const fruits = ["사과", "배"];
const word = "JS";
const user = { name: "홍길동", age: 20 };

// [1]
for (const fruit of fruits) console.log(fruit); // 예상 : 사과 배
for (const ch of word) console.log(ch); // 예상 : J S
for (const idx in fruits) console.log(typeof idx); // 예상 : string string → 배열 번호도 객체의 키라 문자열("0", "1")이다
for (const key in user) console.log(key); // 예상 : name age
console.log([...word]); // 예상 : [ 'J', 'S' ]
console.log([...fruits, ...word]); // 예상 : [ '사과', '배', 'J', 'S' ]

// [2]
// for (const v of user) console.log(v);            // 예상 : 일반 객체는 이터러블이 아니라 for...of 를 쓸 수 없다
// console.log([...user]);                          // 예상 :  배열 스프레드도 이터러블만 펼칠 수 있다
