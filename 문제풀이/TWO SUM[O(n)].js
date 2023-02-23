function answer(nums,target){
    let map = {}; //key,value

    for(let i = 0;i<nums.length;i++){
        // target - nums[i] = nums[j]
        if(map[target - nums[i]] !=undefined ){
            return [map[target - nums[i]],i]
        }

        map[nums[i]] = i;

    }



    return [];
}


let input =[
    [[2,7,11,15],9],
    [[3,2,4],6],
    [[3,3],6]
]

for(let i = 0;i<input.length;i++){
    console.log(`#${i+1} : ${answer(input[i][0],input[i][1])}`)
}