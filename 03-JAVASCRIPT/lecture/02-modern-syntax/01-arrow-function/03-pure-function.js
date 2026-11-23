/**
 * 순수함수 (pure function) 콜백함수같이 넘겨지는 함수가 갗춰야 할 성질 같은것임
 * 1.같은 인자를 넣으면 언제나 같은 값을 반환한다. (외부상태에 의존하지 않는다.
 * 2.함수 바깥의 어떤것도 바꾸지 않는다. (부수 효과가 없다)
 *
 * 순수함수 특징
   정의: 받은 값(인자)만 가지고 결과를 만드는 함수예요.
   특징1: 예측이 가능하다 순수함수만 읽어도 결과를 알 수 있다
   특징2: 안전하게 재사용하고 조립할 수 있다.

 * 부수 효과 (side effect)
 * : 함수가 반환값을 만드는것 이외에 다른 영향을 주는 흔적
 *
 * 종류
 * - 외부 변수변경,
 * - 인수로받는 개체,
 * - 배열의 변경
 * - console.log
 * - 화면변경
 * - 서버요청
 * **/

const add = (a, b) => a + b; //순수 함수

// 비순수함수 : 외부 변수에 의존한다. rate가 바뀌면 반환값도 달라짐
let rate = 0.1;
const multipleRate = (price) => price + price * rate;
// 순수함수로 바꾼것
// const multipleRate = (price, rate) => price + price * rate;

// 비순수함수 : 외부변수를 바꿈
let visitCount = 0; // 전역변수 사용
const visit = () => {
  visitCount++;
  return visitCount;
};

// 비순수 함수 : 인자로 받은 배열을 변경
const addItem = (list, item) => {
  list.push(item);
  return list;
};
// 순수 함수로 변경
const addItemPure = (list, item) => {
  // concat : 새로운 리스트를 만들어 내용들을 합쳐줌
  return list.concat(item);
};
