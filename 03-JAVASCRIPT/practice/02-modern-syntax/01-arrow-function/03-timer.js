/* 문제 03. setTimeout 콜백과 this
   유형 : 코드 작성 | 난이도 : ★★★

   setTimeout(콜백, 밀리초) 는 지정한 시간이 지난 뒤 콜백을 한 번 호출한다.

   [1] startNormal 을 실행하면 0.5초 뒤 'undefined : NaN회' 가 출력된다. 원인을 적는다.
   [2] start 를 완성한다. 0.5초 뒤에 count 를 1 늘리고 '알림 타이머 : 1회' 형태로 출력한다.
   [3] start 메서드 자체를 화살표 함수(start: () => { ... })로 만들면 어떻게 될지 적는다.
*/

const timer = {
    label: '알림 타이머',
    count: 0,

    startNormal() {
        setTimeout(function () {
            this.count++;
            console.log(`${this.label} : ${this.count}회`);
        }, 500);
    },

    start() {
        // TODO
        setTimeout(() => {
            this.count++;
            console.log(`${this.label} : ${this.count}회`);
        }, 500);
    }
};

// [1]
timer.startNormal();   // 0.5초 뒤 : undefined : NaN회
// 원인 : setTimeout 의 콜백이 일반 함수라서, 0.5초 뒤 setTimeout 이 그 함수를 호출할 때 this 가 timer 가 아니다. 그래서 this.label 은 undefined, this.count 는 undefined 에 ++ 를 해서 NaN 이 된다.

// [2]
timer.start();
timer.start();
// 기대 (0.5초 뒤) :
// 알림 타이머 : 1회
// 알림 타이머 : 2회

// [3]
// 답 : start 자체가 화살표 함수가 되면 this 가 timer 가 아니라 객체 바깥(전역)의 this 가 된다. 안쪽 콜백을 화살표 함수로 써도 그 바깥 this 를 그대로 물려받으므로, [1] 과 똑같이 'undefined : NaN회' 가 출력된다.
