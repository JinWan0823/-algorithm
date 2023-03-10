function answer(nums){
    let result =[];

    result = nums[0] > nums[1] ? [nums[0],nums[1]] : [nums[1],nums[0]]

    for(let i =2;i<nums.length;i++){
        if(result[0] < nums[i]){
            result[1] = result[0]; //value shift
            result[0] = nums[i];
        } else if(nums[i] > result[1]){
            result[1] = nums[i];
        }
    }

    return result;
}


let input = [

    //TC : 1
    [-11,5,18,-2,-3,6,4,17,10,9],
    
    //TC : 2
    [3,7,-14,2,-6,13,-20,-2,-7,6,-17,-5,14,-9,19],

    //TC : 3
    [-15,-4,-8,12,12,-8,-8,9,10,15,-2,10,-14,2,13,19,-9,3,-18,14]
];

for(let i = 0;i<input.length;i++){
    console.log(`#${i+1} : ${answer(input[i])}`)
}