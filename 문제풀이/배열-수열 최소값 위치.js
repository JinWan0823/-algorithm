function answer(nums){
    let result =[];


    let min= Number.MAX_SAFE_INTEGER;
    for(let i =0;i<nums.length;i++){
        if(nums[i] < min ){
            min = nums[i]
        }
    }

    let count = 0;
    for(let i = 0;i<nums.length;i++){
        if(min==nums[i]){
            // result.push(i)
            result[count] = i;
            count++;
            // result[count++] = i;
        }
    }


    return result;
}


let input = [

    //TC : 1
    [5,2,10,2],
    
    //TC : 2
    [4,5,7,4,8],

    //TC : 3
    [12,11,11,16,11,12]
];

for(let i = 0;i<input.length;i++){
    console.log(`#${i+1} : ${answer(input[i])}`)
}