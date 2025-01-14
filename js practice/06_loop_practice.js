let info = [
  {
      "name": "김철수",
      "age": 30,
      "city": "서울"
  },
  {
      "name": "박영희",
      "age": 25,
      "city": "부산"
  },
  {
      "name": "이민수",
      "age": 35,
      "city": "대구"
  },
  {
      "name": "최은영",
      "age": 28,
      "city": "인천"
  }
]

console.log(info[0].city)

let names = []

// for (i = 0; i < info.length; i++){
//   names.push(info[i].name)
// }

for (let i of info) {
  names.push(i.name)
}

console.log(names)