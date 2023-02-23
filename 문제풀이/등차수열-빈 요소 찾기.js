function answer(a,b,c){
    let number = 0;

    // 배열을 오름차순으로 정렬
    let num = [a,b,c];
    num.sort((x,y)=>x-y);

    let d=0;
    // 등차값 구하기
    for(let i = 1 ;i<num.length;i++){
        d += num[i] - num[i-1]
    }
    d /= num.length;  // 등차값 

    // 몇번째 요소가 비었는지 찾기 -> 3개로 정해져있기 때문에
    let idx = num[2] - num[1] > num[1] - num[0] ? 2 : 1;


    // num[0] -> 초기 값 + 증가하는값 * 몇번 증가했는지
    number = num[0] + d*idx; 
    
    return number;


}



let input = [
    [1,7,3],
    [4,9,19],
    [60,15,45]
]

for(let i = 0;i<input.length;i++){
    console.log(`#${i+1} : ${answer(input[i][0],input[i][1],input[i][2])}`)
}