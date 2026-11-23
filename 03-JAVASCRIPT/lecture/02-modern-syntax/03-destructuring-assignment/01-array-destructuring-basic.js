/*** 구조분해할당
 *
 * 구조분해 할당은 배열 구조분해와 객체 구조분해 두가지로 나뉘어 진다.
 * - 배열이나 객체 안의 값을 꺼내서 한 번에 나눠 담는 문법이다.
 * * */

const nameArr = ["Gildong", "Hong"];

// 배열 모양으로 분해하겠다. [firstName, lastName]
const [firstName, lastName] = nameArr;

console.log(firstName); // Gildong
console.log(lastName); // Hong

const [char1, char2] = "JS";
console.log(char1); // 결과: J
console.log(char2); // 결과: S

// 2. 함수의 반환값을 바로 분해하기

console.log("Saimdang Shin".split(" ")); // 결과: [ 'Saimdang', 'Shin' ] 쪼갠결과를 배열로 담음

const [firstName2, lastName2] = "Saimdang Shin".split(" ");
console.log(firstName2); // 결과: Saimdang
console.log(lastName2); // 결과: Shin

// 필요없는 요소 건너뛰기
// 배열 구조분해는 순서로 꺼내기 때문에, 필요 없는 자리는 이름 없이 쉼표로 자리만 채우면 돼요.
const [first, , last] = ["firstname", "middlename", "lastname"];
console.log(first); // 결과: firstname
console.log(last); // 결과: lastname

// 변수가 더많을때 - 남는 변수는 undefined가 된다.
const [a, b, c] = [1, 2];
console.log(a, b, c); // 결과: 1 2 undefined

// 요소가 더많으면 남는 요소는 버려진다.
const [d] = [1, 2, 3];
console.log(d); // 결과: 1
