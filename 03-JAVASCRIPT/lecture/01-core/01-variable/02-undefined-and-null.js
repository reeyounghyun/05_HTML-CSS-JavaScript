/**
- null : 값이 없다. => 개발자가 의도적으로 값이 없다고 정의한 것. (개발자가 정의한 것)
- undefined : 값이 없다. => 값이 담긴 적이 없는 것. (컴퓨터가 값이 없다고 한 것 == JavaScript Engine)
*/

var undef;
console.log(undef);

console.log(typeof null); // 출력결과: object
console.log(typeof undefined); // 출력결과: undefined

var maybe = null;
if (typeof null === "object") {
  console.log("Object입니다");
}

console.log(maybe === null);
