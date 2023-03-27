var hoaQua = [
    { ten: 'Xoài', sx: 'China', sl: '100' },
    { ten: 'Xoài', sx: 'VietNam', sl: '130' },
    { ten: 'Xoài', sx: 'ThaiLan', sl: '100' },
    { ten: 'Cam', sx: 'China', sl: '200' },
    { ten: 'Cam', sx: 'ThaiLan', sl: '150' },
    { ten: 'Nho', sx: 'VietNam', sl: '120' },
    { ten: 'Xoài', sx: 'ThaiLan', sl: '100' }
];

/* a. In ra vị trí "xoài" ở mảng trên.
b. Sắp xếp các hóa quả theo số lượng.
c. Từ câu b, lấy ra vị trí của hoa của có số lượng lớn nhất
d. Tìm vị trí của hoa quả có số lượng 400 
 */
let iXoai = []
 hoaQua.forEach((element,index)=>{
    if(element.ten=='Xoài'){
        iXoai.push(index)
    }
})

hoaQua.sort(function(a,b){
    return a.sl - b.sl
})

let index400 = []

hoaQua.forEach((element,index)=>{
    if(element.sl==400){
        index400.push(index)
    }
})

if(index400.length==0){
    console.log('Không có khách hàng mua với sl 400');
} else{
    for (let i = 0; i < index400.length; i++) {
        console.log(hoaQua[i]);
    }
}

