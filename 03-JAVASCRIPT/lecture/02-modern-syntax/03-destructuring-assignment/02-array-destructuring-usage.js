// 1. 왼쪽에는 변수가 아니여도 올 수 있다.

const user = {};
//객체.프로퍼티
[user.firstName, user.lastName] = "Gwansoon Yu".split(" ");
console.log(user); // 결과: { firstName: 'Gwansoon', lastName: 'Yu' }

// 2. 변수 값 교환하기
let student = "유관순";
let teacher = "홍길동";

[student, teacher] = [teacher, student];
console.log(student); // 결과: 홍길동
console.log(teacher); // 결과: 유관순

console.log(`학생 : ${student}, 교사 : ${teacher}`); // 결과: 학생 : 홍길동, 교사 : 유관순

// 3. rest 요소로 나머지 가져오기

const [sgin1, sgin2, ...rest] = [
  "양자리",
  "황소자리",
  "쌍둥이자리",
  "게자리",
  "사자자리",
];

console.log(rest); // 결과: [ '쌍둥이자리', '게자리', '사자자리' ]

// 4. 기본값 설정하기
const [name1 = "아무개", name2 = "김"] = ["길동"];
console.log(name1); // 결과: 길동
console.log(name2); // 결과: 김

