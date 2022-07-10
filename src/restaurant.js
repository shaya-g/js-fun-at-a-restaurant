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

function removeMenuItem() {
  
}



module.exports = {
 createRestaurant,
 addMenuItem,
 removeMenuItem
}
