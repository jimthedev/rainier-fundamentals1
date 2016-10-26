var restaurant = {
  name: 'Bob\'s Beef',
  rating: 2.1,
  reviews: [],
  getFormattedHours: function (open, close, headline) {
    return "Hello" + (a*b*c);
    return 'Open: ' + open + ', Close: ' + close + '. ' + headline;
  }
};

console.log(restaurant);
console.log(restaurant.name);
console.log(restaurant.reviews.length);

console.log(restaurant.getFormattedHours('5AM', '10PM', 'Happy Bday Sean!'));
