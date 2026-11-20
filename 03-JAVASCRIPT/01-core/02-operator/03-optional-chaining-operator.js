// 옵셔널 체이닝 연산자

// NullPointerException을 막으려고
// if (obj !== null)

var someObject = null;
// 변수 뒤에 ?를 붙여 참조하면 옵셔널 체이닝
// var val = someObject.value;   // 에러: Cannot read properties of null
var val = someObject?.value; // 에러 없이 undefined
console.log(val); // 오류 대신 undefined가 담김
