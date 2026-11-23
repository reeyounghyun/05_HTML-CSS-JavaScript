/**
 * 나머지 매개변수
 * - 매개변수 앞에 점 세개를 붙이면(...) 전달된 인자들을 한곳에 모아배열로 만들어준다.
 * ***/

function merge(msg1, msg2) {
  return msg1 + msg2;
}

console.log(merge("안녕하세요")); // 인자의 갯수보다 적으면 undefined로 반환
console.log(merge("안녕하세요", "반갑습니다.")); // 인자 갯수대로 반환
console.log(merge("안녕하세요", "반갑습니다.", "오늘밥은 뭐먹을까요?")); // 인자의 갯수가 넘으면 반환하지 않음

// ... 위치가 매개변수에 있으면 restParmeter 이구나!
function mergeAll(...args) {
  let message = ""; // 매개변수 인자들을 배열로 묶어서 args 변수에 담아줌

  for (const arg of args) message += arg;

  return message;
}

// RestParameter 사용시 주의할 점.
// 1. 반드시 마지막에 위치할것!
// 2. 모이는 인자 갯수가 정해져 있지 않음 → 꼭 필요한 값은 앞에 일반 매개변수로 받는다.
// 3. 한 함수에 하나만 쓸 수 있다.
function introduce(name, ...hobbies) {
  return `${name}의 취미는 ${hobbies.join(",")} 입니다~`;
}
console.log(introduce("이영현", "놀기", "코노", "놀기"));
