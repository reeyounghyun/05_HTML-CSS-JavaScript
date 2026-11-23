/* 문제 02. 스프레드 결과 예측
   유형 : 출력 예측 | 난이도 : ★★☆

   각 줄의 결과를 예상해서 적어 보자.
   객체 스프레드에서는 같은 키가 있을 때 어느 값이 남는지에 주의한다.
*/

const nums = [3, 7, 1];
const more = [10, 20];
const user = { name: "홍길동", age: 20 };

console.log(Math.max(nums)); // 예상 : NaN
console.log(Math.max(...nums)); // 예상 : 7
console.log([...nums, ...more]); // 예상 : 1 3 7, 10 20 // 해결
console.log([0, ...nums, 99]); // 예상 : 0, 1 3 7, 99 // 해결
console.log([..."hi"]); // 예상 : 'h', 'i'
console.log({ ...user, age: 30 }); // 예상 :  ame: '홍길동', age:30
console.log({ age: 30, ...user }); // 예상 :   age:30, name: '홍길동'
console.log({ ...user, city: "서울" }); // 예상 : name: '홍길동', age: 20, city: '서울' // 해결
console.log(nums); // 예상 : 3 7 1 //해결
