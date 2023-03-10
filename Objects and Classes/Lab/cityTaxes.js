function cityTaxes(name, population, treasury) {
  let object = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes: function () {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth: function (percentage) {
      this.population += this.population * (percentage / 100);
    },
    applyRecession: function (percentage) {
      this.treasury -= this.treasury * (percentage / 100);
    },
  };

  return object;
}

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
