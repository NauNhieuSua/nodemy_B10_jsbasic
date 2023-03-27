var bienLai = [
    { ten: "an", giaTri: 300 },
    { ten: "binh", giaTri: 180 },
    { ten: "hoang", giaTri: 170 },
    { ten: "van", giaTri: 100 },
    { ten: "lam", giaTri: 200 },
    { ten: "thinh", giaTri: 210 },
    { ten: "diep", giaTri: 100 },
    { ten: "huong", giaTri: 100 },
  ];

  let bienLaiGiaTriCao =  bienLai.filter(element=>{
    return element.giaTri>200
  })

  let bienlaiTenLam = bienLai.filter(element=>{
    return element.ten=='lam'
  })

  let bienlaiTrungGiaTri = []
  let giatri = []
  let giaTriTrung = []

  for (let i = 0; i < bienLai.length; i++) {
    let giaTriBienLai = bienLai[i].giaTri
    giatri.push(giaTriBienLai)
  }
  for (let i = 0; i < giatri.length; i++) {
    let giatriTrung = giatri.indexOf(giatri[i])
    if(giatriTrung!=i){
      giaTriTrung.push(giatri[i])
    }
  }
giaTriTrung.sort(function(a,b){
  return a-b
})

  for (let i = 0; i < giaTriTrung.length;) {
    if(giaTriTrung[i]==giaTriTrung[i+1]){
      giaTriTrung.splice(i,1)
    }else {
      i++
    }
  }

  for (let i = 0; i < giaTriTrung.length; i++) {
    console.log(bienLai.filter(element=>{
      return element.giaTri ==giaTriTrung[i]
    }))
  }

bienLai.map(element=>{
    if(element.giaTri>200){
        element.rank="Vip"
    }else{
        element.rank='Normal'
    }
 })

bienLai.sort(function(a, b){
  let x = a.ten.toLowerCase();
  let y = b.ten.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});

bienLai.sort(function(a, b){
  return a.giaTri - b.giaTri
});




