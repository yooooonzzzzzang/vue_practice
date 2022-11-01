const member = {
  name: 'aiden',
  age: 22,
  sId: 2022311491,
}

const member2 = {
  name: 'haley',
  age: 20,
  sId: 2022311492,
}
// 생성자 함수, 함수이름 대문자로 시작
function Member(name, age, sId) {
  this.name = name
  this.age = age
  this.sId = sId
}
// 생성자 함수를 사용할때 반드시 new 연산자 사용
const member3 = new Member('isaac', 21, 2022654321)