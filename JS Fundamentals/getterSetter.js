// Define the menu object with private properties and getter/setters
const menu = {
  // Private property to store the meal name
  _meal: "",
  // Private property to store the price
  _price: 0,

  // Setter for meal - only allows a string
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },

  // Setter for price - only allows a number
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },

  // Getter to return a string summary of today's special
  get todaysSpecial() {
    // Only return if both _meal and _price are set correctly (truthy values)
    if (this._meal && this._price) {
      return `Today’s Special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

// Array of special meals, each with a name and matching price
const specials = [
  { meal: "Burger", price: 4.99 },
  { meal: "Pizza", price: 8.99 },
  { meal: "Pasta", price: 3.99 },
  { meal: "Salad", price: 2.99 },
];

// Pick a random index from the specials array
const randomIndex = Math.floor(Math.random() * specials.length);

// Use the setters to assign the meal and price from the randomly selected special
menu.meal = specials[randomIndex].meal;
menu.price = specials[randomIndex].price;

// Display today's special using the getter
console.log(menu.todaysSpecial);
