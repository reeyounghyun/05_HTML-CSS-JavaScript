/**
 * 객체와 배열은 값이아니라 주소를 비교한다.
 *  - 변수에 그대로 대입하면, 변수가 아니라 같은 것을 가리킴
 *  -> 복사를 할때는 스프레드 문법을 사용한다.
 */

const origin1 = [10, 30, 20]; // 원본
const sameOne = origin1; // 주소값만 복사

sameOne.push(50); // 복사본
console.log(origin1); // 원본도 바뀜

const arr = [10, 30, 20];
const arrCopy = [...arr];
console.log(arr);
console.log(arrCopy);
console.log(arr == arrCopy);
console.log(arr === arrCopy);

arrCopy.push(50);
console.log(arr); // 원본에는 50이 없음
console.log(arrCopy); // 복사본에 50이 있음

console.log("------------");

const obj = { name: "홍길동", age: 20 };
const objCopy = { ...obj };

console.log(obj);
console.log(objCopy);
console.log(obj === objCopy); // false: 주소가 다르다

objCopy.age = 30;
console.log(obj); // 변하지 않는다
console.log(objCopy); // 변한다

// 스프레드 문법 '앝은복사'

const origin = {
  name: "홍길동",
  address: { city: "서울", zip: "04524" },
};

const shallow = { ...origin };

shallow.name = "유관순";
console.log(origin.name); // 바깥의 프로퍼티는 안바뀐다.

shallow.address.city = "부산";
console.log(origin.address.city); // 안쪽의 프로퍼티는 바뀐다.

console.log(origin.address === shallow.address); // true 같은객체를 가리킴

// Javascript 외부 API 호출 -> 이때 가지고오는 데이터! 원본이 중요 -> 복사해서 사용

const nested = {
  ...origin,
  address: { ...origin.address },
};
nested.address.city = "대전";
console.log(origin.address.city);


