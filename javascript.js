console.log('Here\'s a for loop showing 1...10:\n')
for(let i = 0; i < 10; i++) {
    console.log(`${i}\n`)
}

console.log('Here\'s a for loop showing 1...10:\n')
let i=0;
do{
    console.log(i+'\n')
}while(i<10)

console.log('Here\'s a for loop showing 1...10:\n')
let reagan=0
while(reagan<10){
    console.log(`${reagan}\n`)
    reagan++
}

console.log('Here\'s a for loop showing 1...10:\n')
let nums=[...Array(10).keys()]
nums.forEach(n=>{
    console.log(`${num}\n`)
})