/* 문제 02. 기본 내보내기와 이름 내보내기 함께 쓰기
   유형 : 코드 작성 | 난이도 : ★★☆

   [1] formatter.js 에서 formatPrice 를 기본 내보내기로, formatDate 를 이름 내보내기로 내보낸다. -- 해결완료

   [2] main.js 에서 기본 내보내기는 toWon 이라는 이름으로, formatDate 는 그대로 가져온다.
       import 문 한 줄로 둘 다 가져온다.
   [3] 기본 내보내기와 이름 내보내기를 가져올 때의 차이를 두 가지 적는다.

   실행 : 이 폴더의 index.html 을 Live Server 로 열고 콘솔(F12)을 확인한다.
*/

// TODO : import
// import formatPrice from "./formatter.js"; // 기본 내보내기 형식
import toWon, { formatDate } from "./formatter.js"; // toWon : 기본 내보내기, { formatDate } : 이름 내보내기

console.log(toWon(1234567)); // 기대 : 1,234,567원
console.log(formatDate(new Date("2026-09-05T00:00:00"))); // 기대 : 2026-09-05

// [3] 차이 : export default 로 가져올때는 중괄호 없이 원하는 함수이름으로 선언하여 가져올수 있다. 이름 내보내기는 default없이 js에서 export를 선언하고, 가져올때는 {} 중괄호 안에 내보낸 함수 이름과 동일하게 적어야 한다. 둘을 함께 가져오고 싶다면 import 새이름, {가져올 함수 이름} 형식으로 가져올수 있다.
