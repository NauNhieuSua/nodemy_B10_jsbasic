var arr2 = [2, 5, 7, 8,3,4,1,3,6,4,3,0]

function trung(arr) {
    let newarr = []
    let count = []
    for (let i = 0; i < arr.length; i++) {
        if (newarr.indexOf(arr[i]) === -1) {
            newarr.push(arr[i])
            count.push(0)
        }
    }
    newarr.sort((a,b)=>{
        return a-b
    })

    for (let i = 0; i < newarr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (newarr[i] == arr[j]) {
                count[i]++
            }
        }
    }
    for (let i = 0; i <newarr.length; i++) {
        if(count[i]>=2){
            for (let j = 0; j < arr.length; j++) {
                if(newarr[i]==arr[j]){
                    console.log(`so ${newarr[i]} xuất hiện tại vị trí ${j}`)
                }
            }
        }
    }
}

trung(arr2)

  