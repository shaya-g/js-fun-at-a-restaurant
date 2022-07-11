function nameMenuItem(item) {
  return `Delicious ${item}`
}

function createMenuItem(itemName, itemPrice, itemType) {
  return {
    name: itemName,
    price: itemPrice,
    type: itemType,
  }
}

function addIngredients(food, ingredients) {
  if (!ingredients.includes(food)) {
    ingredients.push(food)
  }
}


function formatPrice(price) {
  return "$" + price
}

function decreasePrice(priceOfMenuItem) {
  var discountAmount = priceOfMenuItem * 0.1
  return priceOfMenuItem - discountAmount
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
