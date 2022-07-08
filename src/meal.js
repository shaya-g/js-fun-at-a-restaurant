function nameMenuItem(item) {
  return `Delicious ${item}`
}

function createMenuItem(name, price, type) {
   var item = {
   name: name,
   price: price,
   type: type,
   }
   return item;
}

 function addIngredients(food, ingredients) {
   if (!ingredients.includes(food)) {
     return ingredients.push(food);
   }
 }





module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
