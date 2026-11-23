// in operator
// 프로퍼티가 객체에 존재하는지 확인하는 연산자
// 프로퍼티는 key와 value를 한 쌍으로 묶은 것

var student = {
  name: "유관순",
  age: 16,
  test: undefined,
};

console.log(student.name === undefined); // false -> 값이 있으므로 키도 있음

// 값이 undefined인 것과 키가 없는 것을 구분 못함.
console.log(student.height === undefined); // true // 키가 있는지 없는지 모름
console.log(student.test === undefined); // true // 키가 있는지 없는지 모름

console.log("===========구분선=========");

console.log("name" in student); // true
console.log("height" in student); // false
console.log("test" in student); // true

// for-in 반복문
// 객체의 프로퍼티 키를 하나씩 꺼내서 순회하는 반복문
var student2 = {
  name: "유관순",
  age: 16,
  test: undefined,
  getInfo: function () {
    return `${this.name}은 ${this.age}세 입니다.`;
  },
};

for (var key in student) {
  console.log(`key : ${key}`);
  console.log(`student[key] : ${student[key]}`);
}

// 배열 => of를 사용하면 안에 있는 값들을 꺼내올 수 있다.
var numbers = [10, 20, 30];
for (var value of numbers) {
  console.log(value);
}
