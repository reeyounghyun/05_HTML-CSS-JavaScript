/**
 * 런타임: 프로그램이 실제로 실행되고 있는 시간
 * - 함수 리터럴은 코드가 실행되다가 그 줄에 도착하는 순간 함수가 만들어진다.
 *
 * first-class-object (일급 객체)
 * 1. 무명의 리터럴로 생성할 수 있다. -> 런타임에 생성이 가능하다. (예: function (value) {…})
 * 2. 변수나 자료구조(객체, 배열)에 저장할 수 있다.
 * 3. 함수의 매개변수로 전달할 수 있다. (예: apply(increase, 5) - 콜백 함수)
 * 4. 함수의 반환값으로 사용할 수 있다. (예: createCounter가 함수를 return - 클로저)
 *
 * React
 * - 컴포넌트 function UserCard() {..} -> 일급 객체 함수임
 * - <UserCard/>
 * - <UserCard onDelete={콜백 함수}/>
 */
