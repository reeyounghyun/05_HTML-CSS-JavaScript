// 1. 기본값 설정하기
const shirts = { productName: "베이직셔츠" };

// 구조분해 { 이름 = 기본값 } : 값이 없으면 기본값을 사용
const { productName = "어떤 상품", color = "어떤 색상", price = 0 } = shirts;

console.log(productName); // 결과: 베이직셔츠 (shirts에 있으니까 객체의 값)
console.log(color); // 결과: 어떤 색상 (shirts에 없으니까 기본값)
console.log(price); // 결과: 0 (shirts에 없으니까 기본값)

// (비교용) 구조분해 아님! 그냥 객체 만들기 { 이름: 값 }
const test = { productName: "어떤 상품", color: "어떤 색상", price: 0 };

// 다른 이름 + 기본값 같이 쓰기 { 이름: 새이름 = 기본값 }
const { color: shirtsColor = "흰색" } = shirts;

console.log(shirtsColor); // 결과: 흰색 (shirts에 color가 없으니까 기본값)

console.log("----------");

// 기본값이 적용되는 기준
// -> undefined 일때
const fromServer = { nickname: null, points: 0 };
const { nickname = "이름없음", points = 100 } = fromServer;

console.log(nickname); // 결과: null (null은 undefined가 아니라서 기본값 안씀)
console.log(points); // 결과: 0 (0도 값이 있는거라 기본값 안씀)

// ?? : 왼쪽 값이 null 또는 undefined면 오른쪽 값을 사용
console.log(fromServer.nickname ?? "이름없음"); // null 병합 연산자 // 결과: 이름없음

// 필요한것만 골라뽑기
const pants = {
  productName: "배기팬츠",
  color: "검정색",
  price: 30000,
  stock: 12,
  createdAt: "2026-11-23",
};

const { productName: pantsName } = pants; // 필요한것만 꺼내기
console.log(pantsName); // 결과: 배기팬츠
// rest
const { productName: onlyName, ...rest } = pants;
console.log(onlyName); // 결과: 배기팬츠
console.log(rest); // productName을 제외한 나머지 결과: { color: '검정색', price: 30000, stock: 12, createdAt: '2026-11-23' }
