function solution(n, k) {
    var answer = 0;

    k = (k - Math.floor(n/10)) * 2000    
    n =n* 12000;

    console.log(n/10)    

    answer = k+n;
    return answer;
}

console.log (solution(10,3))
console.log (solution(64,6))