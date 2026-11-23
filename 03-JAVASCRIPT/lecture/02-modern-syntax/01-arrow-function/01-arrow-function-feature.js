// 화살표함수
// -> this를 만들지 않는다.

const theater = {
  store: "CGV 가산점",
  title: ["치이카와", "최종면접"],

  // 화살표 함수로 콜백을 넘김
  showByArrow() {
    this.title.forEach((title) => console.log(this.store + ":" + title));
  },

  // 일반 함수를 콜백으로 넘김
  showByNomal() {
    this.title.forEach(function (title) {
      // foreach는 콜백을 객체없이 그냥 호출하게됨, -> 즉, this를 지정하지 못함( this = underfinde)
      console.log(this.store + ": " + title);
    });
  },

  // 일반 함수에서 this를 쓰는 방법 1: 바깥 this를 변수에 저장
  showBySelf() {
    const self = this; // self = theater
    this.title.forEach(function (title) {
      console.log(self.store + ": " + title);
    });
  },

  // 일반 함수에서 this를 쓰는 방법 3: forEach의 두 번째 인자로 this 전달
  showByThisArg() {
    this.title.forEach(function (title) {
      console.log(this.store + ": " + title);
    }, this);
  },
};

theater.showByArrow();
theater.showByNomal();
theater.showBySelf();
theater.showByThisArg();


/**정리
 * 
 * 객체의 매서드를 정의할때 : 매서드 축약표현 사용
 * 콜백 함수를 넘길때 : 화살표 함수 사용
 * **/