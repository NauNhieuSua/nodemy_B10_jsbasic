 let arrPerson = 
 [
    {
        name: 'Trung',
        class: 'Nodemy01',
        dateJoin: '02-05-2020',
        age: 20
    }, {
        name: 'Phong',
        class: 'Nodemy01',
        dateJoin: '06-01-2020',
        age: 19
    }, {
        name: 'Nam',
        class: 'Nodemy02',
        dateJoin: '25-01-2020',
        age: 21
    }
 ]

 

/* dùng .sort  để sắp xếp mảng object có tuổi tăng dần
dùng .sort để sắp xếp mảng theo ngày tham c thgia của học viên
dùng .filter để tìm ra những học viện tham gia trướáng 2
dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG) 
	gợi ý : dùng toUppercase để viết hoa */

 arrPerson.sort(function(a, b){
    return a.age - b.age
  });

  arrPerson.sort(function(a, b){
    return  new Date(a.dateJoin) -  new Date(b.dateJoin)
  });




  

  