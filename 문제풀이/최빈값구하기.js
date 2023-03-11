function solution(str){
    str = [...str];
    const obj = {};
    let answer=[];

    str.forEach((v)=>{
        obj[v] = obj[v]+1 || 1;
        console.log(obj)
    })
    obj["b"] = obj["b"]+1 || 1
    

    let max =0;  // 초기 기준값

    for(let i in obj){
        if(obj[i] > max){
            max = obj[i];  // 최대 빈도 값 저장
        }
    }

    for(let i in obj){
        if(obj[i] == max){  // 최대 빈도 값과 똑같으면 배열에 저장
            answer.push(i)
            console.log(answer)
        }
    }

    answer = answer.sort() // 배열 내림차순 정렬 sort는 문자열 정렬임

    return answer[0];

}

let text = "bbbcccaaaa";
let text2 = "google";

console.log(solution(text))
console.log(solution(text2))