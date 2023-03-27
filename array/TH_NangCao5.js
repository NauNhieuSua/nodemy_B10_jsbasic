var all = [
    {name: 'huy', score: 10, class: 'A'},
    {name: 'hai', score: 7, class: 'B'},
    {name: 'hung', score: 8, class: 'A'},
    {name: 'kien', score: 6, class: 'A'},
    {name: 'vinh', score: 9, class: 'B'},
    {name: 'binh', score: 8, class: 'B'},
    {name: 'cuong', score: 5, class: 'B'},
    {name: 'chien', score: 6, class: 'A'},
    {name: 'minh', score: 7, class: 'B'},
  ]
   
  var doiTuyen = ['huy', 'vinh', 'binh', 'hung', 'minh']

/*   a, Hãy tạo ra arrayA chỉ chứa object  các học sinh lớp A
b, Hãy tạo ra array chứa object các học viên có điểm từ 6 trở xuống
c, Hãy tạo ra array vip chứa object các học viên tham gia đội tuyển
 */

let arrayA = all.filter((element,i)=>{
    return element.class =='A'
})

let arrayB = all.filter((element,index)=>{
    return element.score <=6
})

let arrayVip = []  
all.forEach((element)=>{
    for (let i = 0; i < doiTuyen.length; i++) {
      if(element.name == doiTuyen[i]) {
        arrayVip.push(element)
      }
    }
})
console.log(arrayA);
console.log(arrayB);
console.log(arrayVip);


  