function answer(height){
    let str = "\n";

    for(let i =0;i<height;i++){
        for(let j =0;j<height-i;j++){
            str += "*"
        }

        for(let j=0;j<2*i+1;j++){
            str += "#"
        }

        str+="\n"
    }

    return str;
}


let input = [
    3,5,7

];

for(let i = 0;i<input.length;i++){
    console.log(`#${i+1} : ${answer(input[i])}`)
}