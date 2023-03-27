array = [1,3,25,41,3,2,2,66,22,5,1,1,2,651,51,5,2];
/* -hãy tạo ra array chỉ chứa các số có đuôi là 1 trong array trên 
// [1, 41,....]
- hãy tìm vị trí của phần tử = 2 xuất hiện lần thứ 3 trong array trên
-hãy tìm vị trí của phần tử chứa ký tự 2 thứ 4 trong array 
(25 chứa 1 ký tự 2,   22 chứa 2 ký tự 2)
- phần tử 5 lặp lại mấy lần trong array trên
phần tử nào lặp lại nhiều nhất trong array trên 
-hãy tìm số lớn nhất trong array trên
- hãy tìm số chẵn lớn nhất trong array
- hãy lọc trùng array trên sao cho các phần tử chỉ xuất hiện 1 lần duy nhất

 */

let arrDuoi1=[]
let count = 0
let count1 = 0 

for (let i = 0; i < array.length; i++) {
    if(array[i]%10===1){
        arrDuoi1.push(array[i])
    }
}
console.log(arrDuoi1)

for (let i = 0; i < array.length; i++) {
    if(array[i]==2){
        count++
        if(count==3){
            console.log(i);
        }
    }
}

for (let i = 0; i < array.length; i++) {
    if (array[i]%10==2 || array[i]) {
        
    }
}

let newarray=array.toString().split(',')
for (let i = 0; i < array.length; i++) {
/* let element = newarray[i] */
    if (newarray[i].includes('2')==true) {
        count1++
        if (count1==4) {
            console.log(i);
        }
    }
}

