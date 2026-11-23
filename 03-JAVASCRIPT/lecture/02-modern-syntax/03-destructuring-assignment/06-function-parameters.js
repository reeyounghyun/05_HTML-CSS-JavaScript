/**
 * 함수 매개변수에서의 구조 분해
 */

function displayByPosition(
  producer = "아무개",
  width = 10,
  height = 20,
  items = [],
) {
  console.log(`${producer} ${width} ${height}`);
  console.log(items);
}

displayByPosition("신사임당", undefined, undefined, ["Coffee", "Donut"]);
// 결과: 신사임당 10 20
// 결과: [ 'Coffee', 'Donut' ]

// 구조분해할당을 한다면? // 매개변수를 객체로 변환
function displayProduct({
  producer = "아무개",
  width = 10,
  height = 20,
  items = [],
}) {
  console.log(`${producer} ${width} ${height}`);
  console.log(items);
}

const exampleProduct = {
  items: ["Coffee", "Donut"],
  producer: "bear",
};

displayProduct(exampleProduct);
// 결과: bear 10 20 (width, height는 없어서 기본값)
// 결과: [ 'Coffee', 'Donut' ]

displayProduct({});
// 결과: 아무개 10 20 (빈 객체라 전부 기본값)
// 결과: []
