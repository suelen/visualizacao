//vari´avel global
var dataset;

d3.select("body").append("p").text("Teste 1");
        d3.csv('data/food.csv', function(d) {
          console.log(d);
 });