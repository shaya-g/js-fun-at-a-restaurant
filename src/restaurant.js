function createRestaurant(item) {
  var menus = {
    breakfast: [],
    lunch: [],
    dinner: []
};
  var restaurant = {
   name: item,
   menus: menus
 };

  return restaurant;
}

function addMenuItem(restaurant, newItem) {
  if (newItem.type === "lunch" && !restaurant.menus.lunch.includes(newItem)) {
    restaurant.menus.lunch.push(newItem)
  } else if (newItem.type === "breakfast" && !restaurant.menus.breakfast.includes(newItem)) {
    restaurant.menus.breakfast.push(newItem)
  } else if (newItem.type === "dinner" && !restaurant.menus.dinner.includes(newItem)) {
    restaurant.menus.dinner.push(newItem)
  }
}

function removeMenuItem(restaurant, foodItem, type) {
 for (var i = 0; i < restaurant.menus[type].length; i++) {
   if (restaurant.menus[type][i].name === foodItem) {
     restaurant.menus[type].splice(i, 1);
     return `No one is eating our ${foodItem} - it has been removed from the ${type} menu!`;
   }
 }
 return `Sorry, we don't sell ${foodItem}, try adding a new recipe!`;
}





module.exports = {
 createRestaurant,
 addMenuItem,
 removeMenuItem
}
