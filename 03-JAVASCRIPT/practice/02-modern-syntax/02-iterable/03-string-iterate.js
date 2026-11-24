/* 문제 03. 문자열 순회하기
   유형 : 코드 작성 | 난이도 : ★★☆

   문자열이 이터러블이라는 점을 이용해 아래 함수들을 완성한다.
     countChar(text, target) : text 안에 target 글자가 몇 번 나오는지 반환한다. (for...of)
     reverse(text)           : 문자열을 뒤집어 반환한다. (스프레드로 배열을 만든 뒤 reverse 와 join)
     toCharList(text)        : 공백을 뺀 글자 배열을 반환한다. (스프레드 + filter)
*/

function countChar(text, target) {
  let count = 0;
  // TODO
  for (const char of text) {
    if (char === target) {
      count++;
    }
  }
  return count;
}

// [추가 연습] countSpace(text) : text 안에 공백(" ")이 몇 개 있는지 반환한다. (for...of)
function countSpace(text) {
  let count = 0;
  for (const test of text) {
    if (test === " ") {
      count++;
    }
  }
  return count;
}
console.log("새로시작");
console.log(countSpace("a b c")); // 기대 : 2
console.log(countSpace("hello world !")); // 기대 : 2
console.log(countSpace("React")); // 기대 : 0

function reverse(text) {
  return [...text].reverse().join("");
}
function toCharList(text) {
  return [...text].filter((char) => char !== " ");
}

console.log(countChar("banana", "a")); // 기대 : 3
console.log(countChar("React", "z")); // 기대 : 0
console.log(reverse("React")); // 기대 : tcaeR
console.log(reverse("토마토")); // 기대 : 토마토
console.log(toCharList("a b c")); // 기대 : [ 'a', 'b', 'c' ]
