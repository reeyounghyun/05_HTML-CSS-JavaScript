/* 문제 01. 이름 내보내기와 가져오기
   유형 : 코드 작성 | 난이도 : ★☆☆

   [1] calc.js 의 add, multiply, TAX_RATE 를 이름 내보내기(named export)로 내보낸다.
       secret 은 내보내지 않는다.
   [2] main.js 에서 세 가지를 가져와 아래 기대 결과가 나오게 한다.
   [3] main.js 에서 secret 까지 가져오면 콘솔에 어떤 오류가 나는지 확인하고 적는다.

   실행 : 이 폴더의 index.html 을 Live Server 로 열고 콘솔(F12)을 확인한다.
*/

// TODO : import
import { TAX_RATE } from "./calc.js";
import { add } from "./calc.js";
import { multiply } from "./calc.js";
// import { secret } from "./calc.js"; // [3] 확인용 : 오류 확인 후 이 줄은 주석 처리한다

console.log(add(2, 3)); // 기대 : 5
console.log(multiply(4, 5)); // 기대 : 20
console.log(add(10000, multiply(10000, TAX_RATE))); // 기대 : 11000   (부가세 포함 금액)

// [3] 오류 메시지 : calc.js 파일에서 secret 을 export 하지 않아, 불러올수 가 없다
