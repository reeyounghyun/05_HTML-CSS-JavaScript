// 함수의 호이스팅

// 함수의 선언은 코드의 선두로 끌어올려진 것처럼 동작함.
// 콘솔을 먼저 출력하고, 아래 함수를 입력함
console.log(hello("yh"));

function hello(name) {
  return `${name}님 안녕하세요!`;
}

// 표현식을 사용했을 경우 정의보다 위에서 호출하면 오류가 난다.
// 호이스팅에 기대어서 안 쓰는 걸 권장한다.

// 변수로 선언했을 때 동작하지 않음.
console.log(bye("yh"));

var bye = function (name) {
  return `${name}님 안녕히 가세요!`;
};
