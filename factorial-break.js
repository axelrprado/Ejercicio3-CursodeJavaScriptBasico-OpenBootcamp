//Calcular el factorial de 10 utilizando un bucle while, una bifurcacion if y una sentencia break
let factorial = 1;
let i = 1;
bucleFactorial : while (true) {
    factorial *= i;
    if (i === 10){
        break bucleFactorial;
    }
    i++;
}
console.log(factorial);