function answer(nums){
    let result = [];
   

    // 1. result -> 2차원 배열
    for(let i = 0;i<nums;i++){
        result[i]= [];
    }
    /**
     *  2. 반복문 패턴 구현
     *      1) length길이만큼 시작해서 숫자를 채워준다.
     *      2) length - i , 방향 2회
     *      3) length == 0; 프로그램이 멈춘다.
     */
    let direction = 1;
    let x, y, num ;
    x=y=num=0;
    x--;
    while(1){
        for(let i =0;i<nums;i++){
            x += direction;
            result[y][x] = ++num;
        }
        nums--;

        if(nums == 0 )break;

        for(let j = 0 ;j<nums;j++){
            y += direction;
            result[y][x] = ++num;
        }
        direction *= -1
    }


    return result;
}


let input =[
    3,5,6
]

for(let i = 0;i<input.length;i++){
    console.log(answer(input[i]))
}


// let s = 1;
// for(let i = 0;i<nums;i++){
//     result.push([])

//     for(let j =s;j<=nums*nums;j++){
//         result[i].push(j)
//         if(j==nums*(i+1)){
//             s = j+1;
//             break;
//         }

//     }
// }

// console.log(result)