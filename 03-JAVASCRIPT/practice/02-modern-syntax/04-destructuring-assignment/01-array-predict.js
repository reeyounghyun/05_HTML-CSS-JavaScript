/* 문제 01. 배열 구조 분해 결과 예측
   유형 : 출력 예측 | 난이도 : ★★☆

   각 줄의 결과를 예상해서 적어 보자.
   배열 구조 분해는 이름이 아니라 순서로 담긴다.
*/
// 변수   =  값
const [a, b] = ["사과", "배", "귤"];
console.log(a, b); // 예상 :출력 ["사과", "배"]  귤은 받을 변수가 없어 버려진다.

const [x, , z] = [1, 2, 3];
console.log(x, z); // 예상 : x:1 .2는 그 값을 건너뛴다(어디에도 담기지 않는다), 3: z에 담긴다

const [p, q, r] = [10, 20];
console.log(p, q, r); // 예상 : p:10. q는 20, r은 undefined

const [first, ...others] = ["월", "화", "수", "목"];
console.log(first, others); // 예상 : first : '월' others :['화', '수', '목']

const [only, ...rest] = ["하나"];
console.log(rest); // 예상 : '하나'는 only가 먼저 받고, rest는 남는 값이 없어 빈 배열이 된다.

const [d1 = "기본", d2 = "기본", d3 = "기본"] = [undefined, null, 0];
console.log(d1, d2, d3); // 예상 : 기본 null 0 → 기본값은 값이 undefined 일 때만 쓰인다. null 과 0 은 값이 있는 것으로 보고 그대로 담긴다.

const [c1, c2] = "JS";
console.log(c1, c2); // 예상 : J S
