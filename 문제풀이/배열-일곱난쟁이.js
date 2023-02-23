function answer(nums){
    let result =[];
    
    // 1. 총 합에서 100을 제외하면 2명의 faker들의 합이 나옴
    let total = 0;
    for(let i=0;i<nums.length;i++){
        total += nums[i];
    }
    total = total-100;

    // 2. 이중 for문을 통해 각 숫자의 합을 더해 faker들의 합과 같은것이 있는지 비교
    let faker = [];
    for(let i =0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == total){
                faker[0]=nums[i];
                faker[1]=nums[j];
                break ;
            }
        }
        if(faker.length !== 0) break;
    }


    // 3. nums에서 faker들의 값을 제외하고 result 배열에 값을 업데이트

    for(let i =0;i<nums.length;i++){
        if(nums[i] !== faker[0] && nums[i] !== faker[1]){
            result.push(nums[i])
        }
    }
    


    return result;
}


let input = [

    //TC : 1
    [1,5,6,7,10,12,19,29,33],
    
    //TC : 2
    [25,23,11,2,18,3,28,6,37],

    //TC : 3
    [3,37,5,36,6,22,19,2,28]
];

for(let i = 0;i<input.length;i++){
    console.log(`#${i+1} : ${answer(input[i])}`)
}