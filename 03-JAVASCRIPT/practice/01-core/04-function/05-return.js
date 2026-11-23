/* 문제 05. return 과 이른 반환
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 함수의 반환값을 예상해서 적어 보자.

   [2] getShippingFee(order) : 주문 정보를 받아 배송비를 반환한다. 이른 반환(early return)으로 작성한다.
         - order 가 없으면(null, undefined) 0
         - 주문 금액(total)이 50000원 이상이면 0 (무료 배송)
         - 지역(region)이 '제주' 이면 6000
         - 그 외에는 3000
*/

// [1]
function a() {
    return 'A';
    console.log('여기는 실행될까?');
}
function b() {
    console.log('b 실행');
}
function c() {
    return
        '줄바꿈';
}
function d(n) {
    if (n > 0) {
        return '양수';
    }
}

console.log(a());     // 예상 : 'A'  (return 이후 코드는 실행되지 않음)
console.log(b());     // 예상 : (두 줄) 'b 실행' → undefined  (return 이 없으면 undefined)
console.log(c());     // 예상 : undefined  (return 뒤 줄바꿈 → 자동 세미콜론 삽입으로 return;)
console.log(d(5));    // 예상 : '양수'
console.log(d(-5));   // 예상 : undefined  (return 을 만나지 못하고 함수 종료)

/* 문제 05. return 과 이른 반환
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 함수의 반환값을 예상해서 적어 보자.

   [2] getShippingFee(order) : 주문 정보를 받아 배송비를 반환한다. 이른 반환(early return)으로 작성한다.
         - order 가 없으면(null, undefined) 0
         - 주문 금액(total)이 50000원 이상이면 0 (무료 배송)
         - 지역(region)이 '제주' 이면 6000
         - 그 외에는 3000
*/
// [2]
function getShippingFee(order) {
    if (!order) return 0;                     // 주문 없음
    if (order.total >= 50000) return 0;       // 무료 배송 (제주보다 먼저 검사)
    if (order.region === '제주') return 6000;  // 제주
    return 3000;                              // 그 외
}
console.log(getShippingFee(null));                             // 기대 : 0
console.log(getShippingFee({ total: 60000, region: '제주' }));  // 기대 : 0
console.log(getShippingFee({ total: 20000, region: '제주' }));  // 기대 : 6000
console.log(getShippingFee({ total: 20000, region: '서울' }));  // 기대 : 3000
