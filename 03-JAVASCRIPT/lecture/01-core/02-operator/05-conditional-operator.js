// 조건 연산자, 삼항 연산자

var score = 80;

var result = score >= 60 ? "합격" : "불합격";
console.log(result);

if (score >= 60) {
  result = "합격";
} else {
  result = "불합격";
}

console.log(result);

// 쓰임이 다름
// if문 : 값이 될 수 없다. -> 변수에 담거나, 다른 식 안에 넣을 수가 없다
// 삼항 연산자 : 표현식이다, 그래서 그 자체가 값이 된다 -> 값이 들어갈 자리에 넣을 수 있다

var count = 0;
console.log(`장바구니 : ${count > 0 ? count + "개" : "비어있음"}`);

var user = { name: "홍길동", age: 27 };
var badge = {
  name: user.name,
  type: user.age >= 20 ? "성인" : "청소년",
};
console.log(badge);

