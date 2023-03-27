let  data2 = [1,1,3,4,4,5,6,7,9] 
data2.push(8)
data2.push(10)
data2.unshift(5)
data2.splice(5,1,11)

data2.splice(4,1,5,7)
/* console.log(data2); */


let data03 = ['Cam','Xoài','Mít','Bưởi','Quýt','Dưa gang']

for (let index = 0; index < data03.length; index++) {
   if(data03[index]=='Dưa gang'){
    data03.splice(index,1,'Dưa hấu')
   }  
}

data03.splice(Math.floor(data03.length/2),0,"Mận")
/* console.log(data03); */


const persons = [
    {firstname : "Đào", lastname: "Văn Anh"},
    {firstname : "Trần", lastname: "Huy"},
    {firstname : "Lê", lastname: "Hoàng"}
  ]; 

  let newPerson = {
    firstname: "Trần",
    lastname:"Hậu"
  }
    persons.push(newPerson)
  persons.forEach(element=>{
    if(element.firstname=="Trần" & element.lastname=="Huy"){
        element.firstname='Nguyễn'
        element.lastname='Hoàng'
    }
  })

 persons.map(element=>{
    element.address='Hà Nội'
 })

 /* console.log(persons); */

 let arr2 = ['4','6', 1,2,3,5,'y','t',5]
 let sum = 0
 arr2.forEach((element,index)=>{
    if(element*1==element){
        sum+=Number(element)
    } 
 })
 /* console.log(sum); */
/* BÀi 6 TH Array */
 let data = [1,2,3,1,2,3,4,5,6,5,4,6,1]
 let dataTrung = []
  for (let i = 0; i < data.length; i++) {
    let indextrung = data.indexOf(data[i])
      if(indextrung !=i){
        dataTrung.push(data[i])
      }
  }

 console.log(dataTrung);



  /* bài 5 TH array */
var list1 = [3,6,7,9,5]
var list2 = [3,5,7,8,6,6,7]

function sumList(list1,list2){
  let list3 = list1.concat(list2)
  let sum = 0
  for (let index = 0; index < list3.length; index++) {
    sum+=list3[index]
  }
  return sum
}

console.log(sumList(list1,list2));








