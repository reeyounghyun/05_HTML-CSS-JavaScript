/**
 * 객체 구조 분해 할당 기본 문법 ★★★
 * - 객체는 프로퍼티 이름으로 분해한다.
 * ***/

// 기본문법
const pants = {
  productName: "배기팬츠",
  color: "검정색",
  price: 30000,
};

const { productName: productName, color: color, price: price } = pants;
console.log(productName); // 결과: 배기팬츠
console.log(color); // 결과: 검정색
console.log(price); // 결과: 30000

const { productName: n1, price: p1 } = pants;

// 배열이랑 다르게 순서는 상관 없다, 이유는 이름으로 찾기 때문이다.
console.log(n1, p1); // 결과: 배기팬츠 30000

/**다른이름으로 받기
 * {프로퍼티이름 : 새변수 이름}
 * - 프로퍼티 이름만 같으면, 새변수이름을 사용해도 값을 받을 수 있다.
 * **/

// 3. 축약표현과 짝을 이룬다.
const id = "p-00001";
const made = { id, price };

// 구조분해할당
const { id: gotid } = made;

console.log(gotid);
