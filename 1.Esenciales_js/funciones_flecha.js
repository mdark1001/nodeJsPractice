var x = function(a, b) {
  return a + b;
}
x_flecha = (a, b) => {
  return a + b
};

var fact_flecha = (x) => {
  var f = 1;
  for (var i = 1; i <= x; i++) {
    f *= i;
  }
  return f;
};

console.log(fact_flecha(4));
