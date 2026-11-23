function greet(name) {
  return `안녕하세요, ${name}님~!`;
}

// default : 기본값
// -> 이파일의 대표라는 의미
export default greet;

// 이름 내보내기도 같이 쓸 수 있다
export const LANG = "ko";