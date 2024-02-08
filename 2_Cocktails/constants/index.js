import cocktails from './cocktails.js';
const ctx = document.getElementById('cocktailChart');

const cocktailsByYear = cocktails.reduce((acc, cocktail) => {
  const year = new Date(cocktail.dateModified).getFullYear();

  if (!acc[year]) {
    acc[year] = 1;
  } else {
    acc[year]++;
  }

  return acc;
}, {});

const years = Object.keys(cocktailsByYear);
const cocktailCounts = Object.values(cocktailsByYear);

const cocktailChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [{
      label: 'Cantidad de Cócteles por Año',
      data: cocktailCounts,
    }],
  },
});

let ginIngredient = 0;
let vodkaIngredient = 0;
let tequilaIngredient = 0;
let rumIngredient = 0;
let whiskeyIngredient = 0;
for (const cocktail of cocktails) {
  const ingredients = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
    cocktail.strIngredient6,
    cocktail.strIngredient7,
    cocktail.strIngredient8,
    cocktail.strIngredient9,
    cocktail.strIngredient10,
    cocktail.strIngredient11,
    cocktail.strIngredient12,
    cocktail.strIngredient13,
    cocktail.strIngredient14,
    cocktail.strIngredient15,
  ];

  if (ingredients.includes('Gin')) {
    ginIngredient++;
  } else if (ingredients.includes('gin')) {
    ginIngredient++;}
  if (ingredients.includes('Vodka')) {
    vodkaIngredient++;
  }else if (ingredients.includes('vodka')) {
    vodkaIngredient++;}
  if (ingredients.includes('Tequila')) {
    tequilaIngredient++;
  }else if (ingredients.includes('tequila')) {
    tequilaIngredient++;}
  if (ingredients.includes('Rum')) {
    rumIngredient++;
  }else if (ingredients.includes('rum')) {
    rumIngredient++;}
  if (ingredients.includes('Whiskey')) {
    whiskeyIngredient++;
  }else if (ingredients.includes('whiskey')) {
    whiskeyIngredient++;}
}

const ctx2 = document.getElementById('cocktailChartPie');
const cocktailChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Gin', 'Vodka', 'Tequila', 'Rum', 'Whiskey'],
    datasets: [{
      label: 'Bebidas alcolicas',
      data: [ginIngredient, vodkaIngredient, tequilaIngredient, rumIngredient, whiskeyIngredient],
    }],
  },
});


const sortedCocktails = cocktails.sort((a, b) => {
   const dateA = new Date(a.dateModified);
  const dateB = new Date(b.dateModified);  
   return dateB - dateA;
});

const ultimos20Cocktails = sortedCocktails.slice(0, 20);
console.log(ultimos20Cocktails)
const cocktailList = document.getElementById('cocktailList');
ultimos20Cocktails.forEach(cocktail => {
  const listItem = document.createElement('li');
  listItem.className = 'cocktail-list-item';
  listItem.textContent = cocktail.strDrink; });
  cocktailList.appendChild(listItem);