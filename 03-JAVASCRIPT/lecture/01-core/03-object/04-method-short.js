// 메서드 축약

// 원본
var dog = {
  name: "구찌",

  eat: function (food) {
    console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
  },
};

// 원본을 축약해 보자.
var dog2 = {
  name: "구찌",

  eat(food) {
    console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
  },
};
dog2.eat("과일");

// 화살표 함수
// 특징 : 객체를 가리키지 않아, this를 사용하지 않는다.
// 객체의 바깥 범위의 this를 사용한다.
var dog3 = {
  name: "구찌",

  eat: (food) => {
    console.log(`${this.name}(은)는 ${food}를 먹습니다.`);
  },
};

dog3.eat("고기");
