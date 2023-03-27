var khanhHang = 
[{ten: 'huy', phanLoai: 'A', giohang:{soLuong: 12, trongLuong: 12}},
{ten: 'lam', phanLoai:'B', giohang:{soLuong: 8, trongLuong: 7}},
{ten: 'tung', phanLoai:'C', giohang:{soLuong: 10, trongLuong: 8}},
{ten: 'hai', phanLoai:'A', giohang:{soLuong: 8, trongLuong: 20}},
{ten: 'vinh', phanLoai:'A', giohang:{soLuong: 7, trongLuong: 9}},
{ten: 'nam', phanLoai:'C', giohang:{soLuong: 5, trongLuong: 8}},
{ten: 'khanh', phanLoai:'B', giohang:{soLuong: 5, trongLuong: 10}},
]

 var danhSachLoai = [
   {loai: 'A', heSo: 2, dinhMuc:24, soLuong:10},
    {loai: 'B', heSo: 3, dinhMuc:22, soLuong:7},
    {loai: 'C', heSo: 1, dinhMuc:10, soLuong:9},
]

// Hãy tính liệu người mua hàng có đạt đủ điều kiện nhận ưu đãi hay không! Điều kiện nhận ưu đãi: Số định mức mỗi người nhỏ hơn định mức của sản phẩm
// Công thức tính dinhMuc = trongLuong*heSo

khanhHang.forEach((element,index)=>{
    let dinhmuc = 0
    for (let i = 0; i < danhSachLoai.length; i++) {
       if (element.phanLoai==danhSachLoai[i].loai) {
        dinhmuc = element.giohang.trongLuong*danhSachLoai[i].heSo
        element.dinhMuc = dinhmuc
       }
    }
})

khanhHang.forEach((element,index)=>{
    for (let i = 0; i < danhSachLoai.length; i++) {
       if (element.phanLoai==danhSachLoai[i].loai && element.dinhMuc<danhSachLoai[i].dinhMuc) {
        element.uuDai = "đạt"
       } else {
        element.uuDai = " Không đạt"
       }
    }
})

console.log(khanhHang);