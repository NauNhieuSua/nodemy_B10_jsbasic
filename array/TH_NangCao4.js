var hocSinh=[
    {ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
    {ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
    {ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}},
    ]
    
    var khoiThi = [
    {khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:25},
    {khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:24},
    {khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20},
    ]
    

 /* -hãy tính điểm thi của từng học sinh biết tổng điểm = điểm thi * hệ số
    hệ số sẽ thay đổi theo kh ối thi và môn thi
    -hoc sinh thi đỗ nếu điểm thi >= điểm sàn của khối tương ứng
    -hãy cho biết ai thi đỗ, ai thi trượt */

    for (let i = 0; i < hocSinh.length; i++) {
       for (let j = 0; j < khoiThi.length; j++) {
        if(hocSinh[i].khoi==khoiThi[j].khoi){
            hocSinh[i].tongdiem = hocSinh[i].diem.toan*khoiThi[j].heSo.toan + hocSinh[i].diem.van*khoiThi[j].heSo.van + hocSinh[i].diem.anh*khoiThi[j].heSo.anh
           }
       }
    }

    for (let i = 0; i < hocSinh.length; i++) {
       for (let j = 0; j < khoiThi.length; j++) {
        if(hocSinh[i].khoi == khoiThi[j].khoi && hocSinh[i].tongdiem>=khoiThi[j].diemSan){
            hocSinh[i].ketqua = 'Đỗ'
        } else {
            hocSinh[i].ketqua = 'trượt'
        }
       }
    }

    console.log(hocSinh);