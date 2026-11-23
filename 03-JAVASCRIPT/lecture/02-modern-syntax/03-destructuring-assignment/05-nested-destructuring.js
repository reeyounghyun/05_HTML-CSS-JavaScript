/**
 * 중첩 구조 분해
 *  - 객체안에 객체가, 배열안에 배열이
 **/

const product = {
  size: {
    width: 10,
    height: 30,
  },
  items: ["doll", "robot"],
};

const {
  // size 안에 들어가서 분해해라
  size: { width: w, height: h },
  items: [item1, item2],
} = product;

console.log(w); // 결과: 10
console.log(h); // 결과: 30
console.log(item1); // 결과: doll
console.log(item2); // 결과: robot

// console.log(size); // size is not defined

const { size } = product;

console.log(size); // 결과: { width: 10, height: 30 }

// 옵셔널 체이닝
// const name = response?.user?.name
