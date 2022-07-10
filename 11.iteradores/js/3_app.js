//El ejercicio del Fizz Buzz

//de un total de 100 números muestre lo siguiente:
//multiplos de 3 = fizz
//multiplos de 5 = buzz
//multiplos de ambos = FIZZBUZZ..!!

for(let i = 1; i <= 100; i++){
    // console.log(i)
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZBUZZ..!!`)
    } else if(i % 3 === 0){
        console.log(`${i} fizz`)
    } else if(i % 5 === 0){
        console.log(`${i} buzz`)
    }
}