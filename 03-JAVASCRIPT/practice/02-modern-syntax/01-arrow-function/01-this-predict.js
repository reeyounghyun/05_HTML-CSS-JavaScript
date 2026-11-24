/* 문제 01. 화살표 함수와 this 출력 예측
   유형 : 출력 예측 | 난이도 : ★★☆

   각 메서드를 호출했을 때의 출력 결과를 예상해서 적어 보자.
     - 일반 함수 : 호출될 때마다 자기만의 this 가 정해진다.
     - 화살표 함수 : 자기 this 를 만들지 않고 바깥의 this 를 그대로 쓴다.
*/

const cafe = {
    name: '별다방',
    menu: ['아메리카노', '라떼'],

    showArrow() {
        this.menu.forEach(item => console.log(`${this.name} - ${item}`));
    },

    showNormal() {
        this.menu.forEach(function (item) {
            console.log(`${this.name} - ${item}`);
        });
    },

    getNameArrow: () => this.name,

    getName() {
        return this.name;
    }
};

cafe.showArrow();
// 예상 : 별다방 - 아메리카노
// 예상 : 별다방 - 라떼

cafe.showNormal();
// 예상 : undefined - 아메리카노
// 예상 : undefined - 라떼

console.log(cafe.getNameArrow());   // 예상 : undefined
console.log(cafe.getName());        // 예상 : 별다방

// 질문. showNormal 에서 this.name 이 '별다방' 으로 나오지 않는 이유는?
// 답 : forEach 의 콜백이 일반 함수라서, forEach 가 그 함수를 그냥 호출할 때 자기만의 this 가 새로 정해진다. 이 this 는 cafe 가 아니라 전역 객체이므로 this.name 이 undefined 가 된다.
