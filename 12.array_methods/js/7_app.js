//.concat => sirve para unir dos arreglos
const meses = ['enero','febrero','marzo','abril','mayo','junio','julio']
const meses2 = ['agosto','setiembre']
const meses3 = ['octubre','noviembre']

//.concat
const  resultado = meses.concat(meses2, meses3)
console.log(resultado)

//con spread operator
const resultado2 = [...meses, ...meses2, ...meses3]
console.log(resultado2)