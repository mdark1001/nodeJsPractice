var mi_arreglo = [1, 5, 4, 5, 4, 57, 63, 1, 7, 8, 2, 10];

//uso de forEach
/*
  El método forEach() ejecuta la función indicada una vez por cada
  elemento del array.
*/
mi_arreglo.forEach((i, j) => {
  console.log(i, j);
});

//uso de filter
/*
  El método filter() crea un nuevo array con todos los elementos que cumplan
  la condición implementada por la función dada.
*/
var result = mi_arreglo.filter((valor) => valor < 10);
console.log(result);

// uso de map
/*
  El método map() crea un nuevo array con los resultados de la
  llamada a la función indicada aplicados a cada uno de sus elementos.
*/
var result = mi_arreglo.map((x) => {
  return x * x
});
console.log(result);
