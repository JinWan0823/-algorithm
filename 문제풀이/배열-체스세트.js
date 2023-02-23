function answer(ches){
    let result =[];
    let fullSet= [1,1,2,2,2,8];
    let count = 0;
    for(let i = 0;i<fullSet.length;i++){
        result[count++] = fullSet[i]-ches[i]
    }


    return result;
}


let input = [

    //TC : 1
    [0,1,2,2,2,7],
    
    //TC : 2
    [2,1,2,1,2,1],

    //TC : 3
    [0,1,1,5,3,6]
];

for(let i = 0;i<input.length;i++){
    console.log(`#${i+1} : ${answer(input[i])}`)
}