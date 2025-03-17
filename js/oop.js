const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(name) {
    let obj = {}; 
    obj.name = name; 
    obj.greetings = function () {
        alert(`Hey this is $(this.name).`);
    }; 
    return obj; 
}
/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("P1");
/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, interests){
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.age = age; 
    this.interests = interests; 
    this.bio = function () {
        return `The interests of $(this.firstName) $(this.lastName), of age $(this.age) are $(this.interests). `; 
    }
}
/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */
let person2 = new Person("P1", "LP1", 18, ["swimming", "reading", "dancing"]);


/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()
output.textContent = person2.bio();
/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda"; 
car.model = "Civic"; 
car.fun = function () {
    alert(`A car of brand: ${this.brand} and model: ${this.model}.`);
}
/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car); 
anotherCar.model = "CRV";

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS

const createHamburger = {  /* create object and add properties */
    typeOfBun: { /* type of bun */
        optionOne: 'Classic White Buns',
        optionTwo: 'Whole Wheat Buns',
        optionThree: 'Sesame Seed Buns',
        optionFour: 'Gluten-Free Buns',
        optionFive: 'Brioche Buns'
    }, 
    typeOfVegetableGarnish: {  /* type of veggies */
        optionOne: 'Lettuce',
        optionTwo: 'Onions',
        onionDetails: { /* nested onion types */
            onionOne: 'Red Onion',
            onionTwo: 'Yellow Onion',
            onionThree: 'Grilled Pickled Onion',
        }, /* more veggies */
        optionThree: 'Pickles',
        optionFour: 'Tomatos',
        optionFive: 'Olives', 
        optionSix: 'Banana Peppers'
    }, /* cheese type  */
    typeOfCheese: { 
        cheeseOne: 'Cheddar Cheese', 
        cheeseTwo: 'Swiss Cheese', 
        cheeseThree: 'American Cheese'
    }, /* sauce type */
    typeOfSauce: { 
        sauceOne: 'Chipotle Mayo', 
        sauceTwo: 'Honey Mustard', 
        sauceThree: 'Sriracha Mayo',
        sauceFour: 'Tangy Garlic'
    }, /* patty type  */
    typeOfPatty: { 
        pattyOne: 'Beef Patty',
        pattyTwo: 'Chicken Patty',
        pattyThree: 'Veggie Patty', 
        pattyFour: 'Halal Patty (Chicken)'
    }, /* amount of patty */
    amountOfPatty: { 
        amountOne: 'Single patty',
        amountTwo: 'Double patty', 
        amountThree: 'Triple patty'
    }, /* extra property - grill levels */
    typeOfGrillLevel: {
        grillLevelOne: 'Light level',
        grillLevelTwo: 'Medium level',
        grillLevelThree: 'Well done level'
    },
    
    // function to describe hamburger
    describeHamburger: function(bun, garnish, cheese, sauce, patty, amount, grill) {
        return `This delicious hamburger has a soft ${bun} with fresh ${garnish} and ${cheese}, topped with ${sauce} specialty sauce. It contains ${amount} of juicy ${patty} type, grilled to ${grill}.`;
    }
};

// describe
const myHamburger = createHamburger.describeHamburger(
    createHamburger.typeOfBun.optionFive, 
    createHamburger.typeOfVegetableGarnish.optionOne, 
    createHamburger.typeOfCheese.cheeseOne, 
    createHamburger.typeOfSauce.sauceOne, 
    createHamburger.typeOfPatty.pattyThree, 
    createHamburger.amountOfPatty.amountTwo,
    createHamburger.typeOfGrillLevel.grillLevelTwo 
);

console.log(myHamburger); // log to console
