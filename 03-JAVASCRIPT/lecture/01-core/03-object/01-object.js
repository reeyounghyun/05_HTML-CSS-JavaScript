/**
 * JavaScript -> 객체 기반(지향) 프로그래밍 언어
 * 원시타입 제외하고 전부 Object 타입
 *
 * 자바스크립트의 객체
 * - 프로퍼티로 구성된 집합 프로퍼티(property) -> Key Value의 쌍
 * - 프로퍼티 : 객체의 상태를 나타내는 값 (data) -> 자바의 필드
 * - 메서드 : 프로퍼티가 함수인 경우를 부르는 이름
 *
 * Java       -> 클래스 기반 객체지향언어
 *  : 정의한 클래스가 필요했음, new 클래스()
 * JavaScript -> 프로토타입 기반 객체지향언어
 *  : 클래스가 없어도 객체를 만들 수 있음
 */

var student = {
  // 키값 쌍으로 구성된 프로퍼티 (객체의 상태)
  name: "유관순",
  age: 16,

  // 메서드 : 프로퍼티를 이용해 조작할 수 있는 동작
  getInfo: function () {
    return `${this.name}은 ${this.age}세 입니다.`;
  },
};

// 결과: object
console.log(typeof student);

// 결과: json형태의 object
console.log(student);

// 결과: [Function: getInfo] 프로퍼티 값으로만 꺼내면 함수 자체를 가리킴
console.log(student.getInfo);

// 결과: 유관순은 16세 입니다. 호출을 하면 결과가 나옴 () 있고 없고 차이
console.log(student.getInfo());

// key - value : key에 해당하는 값은 문자열이었음
// 식별자 네이밍 규칙 (변수의 이름으로 쓸 수 있는 형태)일 경우 생략이 가능하다.
// 공백이나 -를 섞어서 규칙을 따르지 않을 때는 따옴표를 사용해야 한다.
var keyExample = {
  normal: "normal value",
  "dash-key": "dash-value",
  normal: "new value",
};

console.log(keyExample);
console.log(keyExample.normal);

//keyExample == 객체 이름이다
console.log(keyExample["normal"]);

// 프로퍼티 동적 생성
// 키 이름이 실행중에 정해져 대괄호 표기법으로 추가가 가능하다.
var key = "test";
keyExample[key] = "test value";

console.log(keyExample);
