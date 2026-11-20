/**
 * 자바스크립트의 함수는 객체
 * -> 함수는 값으로 취급이 가능
 * -> 프로퍼티의 값으로도 쓸 수 있음 -> 메서드
 */

var dog = {
  name: "구찌",

  // 자바스크립트에서는 this를 생략할 수 없다.
  // 객체의 프로퍼티(name)는 this.name, 매개변수(food)는 this 없이 food
  // this.food로 쓰면 dog에 food 프로퍼티가 없어서 undefined가 나온다.
  eat: function (food) {
    console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
  },
};

dog.eat("고구마");

// 함수도 변수에 옮겨 담을 수 있다.
var eating = dog.eat;
console.log(typeof eating);

eating("고기");

var cat = {
  name: "나비",
  eat: eating,
};

cat.eat();
