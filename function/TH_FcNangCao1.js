var data = [
    {username: 'thanhTung', password: 'tung1234'},
    {username: 'tranganh', password: 'trang1234'},
]

/* Hãy viết function đăng ký tài khoản
function có đầu vào là username và password
nếu username khác rỗng, password >= 8 ký tự thì thêm vào data

Viết function đăng nhập có đầu vào là username và password
nếu username, password khớp với data thì thông báo thành công
nếu sai username thì báo sai username
nếu sai password thì báo sai password 

Viết function changePass có đầu vào là username, password, newPass
nếu username, password khớp với data thì đổi password thành newPass
nếu sai username thì báo sai username
nếu sai password thì báo sai password */

let duLieu = {}


function dangKy(username,password){
    if(account.length!='' && password.length>=8){
        duLieu.password = password
        duLieu.account = account
        data.push(duLieu)
    }
}

dangKy('thanhhai','12345678')
console.log(data);
//
//aaaa