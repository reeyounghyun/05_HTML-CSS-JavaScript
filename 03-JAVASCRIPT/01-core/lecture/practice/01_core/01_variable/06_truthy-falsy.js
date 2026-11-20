/* 문제 06. Truthy / Falsy 판별하기
   유형 : 출력 예측 + 코드 작성 | 난이도 : ★★☆

   [1] 각 값이 if 문 조건에서 참(Truthy)인지 거짓(Falsy)인지 예상해서 적어 보자.

   [2] countFalsy(arr) 함수를 완성한다.
       배열을 받아서 Falsy 값이 몇 개인지 세어 반환한다.
       for 문과 if 문만 사용한다. (배열 메서드는 06_array 에서 배운다)

   [3] hasItems(list) 함수를 완성한다.
       배열에 요소가 하나 이상 있으면 true, 비어 있으면 false 를 반환한다.
       if (list) 로는 왜 안 되는지 생각해 본다.
*/

// [1] Truthy 면 T, Falsy 면 F 로 예상을 적는다.
console.log(Boolean(0)); // 예상 : F
console.log(Boolean(-1)); // 예상 : T
console.log(Boolean("")); // 예상 : F
console.log(Boolean(" ")); // 예상 : T
console.log(Boolean("0")); // 예상 : T
console.log(Boolean("false")); // 예상 : T
console.log(Boolean(null)); // 예상 : F
console.log(Boolean(undefined)); // 예상 : F
console.log(Boolean(NaN)); // 예상 : F
console.log(Boolean([])); // 예상 : T
console.log(Boolean({})); // 예상 : T

// [2] countFalsy
function countFalsy(arr) {
  // TODO
  let count = 0;
  for (const item of arr) {
    if (!item) {
      count++;
    }
  }
  return count;
}

console.log(countFalsy([0, 1, "", "a", null, [], NaN])); // 기대 : 4
console.log(countFalsy(["hello", 10, {}, []])); // 기대 : 0

// [3] hasItems
function hasItems(list) {
  // TODO
  // 빈 배열 []도 Truthy라서 if (list)로는 비었는지 알 수 없다 -> length로 확인
  return list.length > 0;
}

console.log(hasItems([1, 2, 3])); // 기대 : true
console.log(hasItems([])); // 기대 : false
