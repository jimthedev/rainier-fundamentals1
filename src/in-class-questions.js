/*
 1.  What is the name for a characteristic pair of an object?
 A:  property

 2a. In an object's characteristic pair what is the name given to
       the first half?
 A:  Key

 2b. What about the second half?
 A:  Value

 3. Write an object to represent a restaurant.
    - name
    - website
    - rating
    - owner
      - name
      - email
    - menu
      - courses
        - description
        - price
*/

// Correct
// Uses an array for first, second, third courses
var restaurant = {
  name: 'Bob\'s Culver\'s',
  website: 'http://www.bob.com',
  rating: 4.5,
  owner: {
    name: 'Bob Bobberson',
    email: 'bobboberson@me.com'
  },
  menu: {
    courses: [
      {
        description: 'Nachos',
        price: 5.99
      },
      {
        description: 'Butter Burger',
        price: 1.00
      },
      {
        description: 'Concrete Mixer',
        price: 4.79
      }
    ]
  }
};

// Also Correct
// Uses a nested object for apps, entres, dessert courses
var restaurant {
  menu: {
    courses: {
      apps: {
        wings: {
          description: ['Buffalo', 'BBQ', 'Hot'],
          prices: {
            small: 4.99,
            medium: 5.99
          }
        }
      },
      entres: {

      }
    }
  }
};

/*
  4. Write a function called multiple that takes three numbers and returns
     multiplied by one another.

  5. Log to the console the results of #4.

  Student answers:

*/

// Incorrect, need to pass multiple params
var multiply = function(math) {
  return (2*4*6); // Don't hard code values in a function
};
console.log(math); // This isn't how you'd call the function

// Close, but still doesn't work.
// Student used an anonymous function
// Function is defined correctly
var multiply = function(a, b, c) {
  return a*b*c;
}
console.log(multiply); // This isn't how you call a function

// Correct
// Uses a named function
function multiply (a, b, c) {
  return a*b*c;
}
// Correct call
console.log(multiply(1,2,3)); // 6
