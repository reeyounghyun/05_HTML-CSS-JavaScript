/* 문제 07. Number / parseInt / String / Boolean
   유형 : 출력 예측 | 난이도 : ★★☆

   명시적 타입 변환의 결과를 예상해서 적어 보자.
   특히 Number() 와 parseInt() 의 차이에 주의한다.
*/

console.log(Number("10")); // 예상 : 10
console.log(Number("10.5")); // 예상 : 10.5
console.log(Number("10px")); // 예상 : Nan
console.log(parseInt("10px")); // 예상 : 10
console.log(parseInt("10.9")); // 예상 : 10
console.log(parseInt("px10")); // 예상 : Nan
console.log(Number(true)); // 예상 : 1
console.log(String(123)); // 예상 : 123
console.log(String(null)); // 예상 : null
console.log(Boolean("0")); // 예상 : true
console.log(!!""); // 예상 : false
console.log(NaN === NaN); // 예상 : false
console.log(Number.isNaN(Number("스물"))); // 예상 : true

// 질문. 회원가입 폼에서 나이를 입력받는다. 사용자가 '20abc' 를 입력했을 때
//       잘못된 입력으로 걸러내려면 Number() 와 parseInt() 중 무엇을 써야 할까? 이유는?
// 답 :Number()를 사용해야 한다. Number()는 문자열 전체가 숫자여야 반환하고, 아니면 NaN을 반호나해서 잘못된 입력을 걸려낼수 있다, 반면  parseInt()는 앞의 숫자 '20'만 읽고 뒤의 'abc'는 무시해서 20이 나오기 때문에 잘못된 입력인지 알 수 없다.
