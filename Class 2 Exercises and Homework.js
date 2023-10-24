// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const krishRag = {
  firstName: 'Krish',
  lastName: 'Raghunath',
  'favorite food': 'dosa',
  bestFriend: {
    bfFirstName: 'VJ',
    bfLastName: 'Jeffries',
    'favorite food': 'pancakes',
  }
}

// 2. console.log best friend's firstName and your favorite food
console.log(krishRag.bestFriend.bfFirstName, krishRag['favorite food'])

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const ticTacToeArray = [
  ['-','O','-'],
  ['-','X','O'],
  ['X','-','X']
]

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

ticTacToeArray[0][2] = 'O'

// 5. Log the grid to the console.
console.log(ticTacToeArray[0])
console.log(ticTacToeArray[1])
console.log(ticTacToeArray[2])

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
let emailTestExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
let myEmail = 'lsdfldskfj krag@uw.edu iow4tnvp4nwp krag.com al;kjf;lkdsfj ra;oiwjf @@@ @.com'
let testString = myEmail.match(emailTestExp)
console.log(testString)

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '10/24/2023';
const startDate = new Date(assignmentDate);
console.log(startDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const additionDays = 7;
const dueDate = new Date(startDate);
dueDate.setDate(startDate.getDate() + additionDays);
console.log(dueDate)

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const month = months[dueDate.getMonth()];
const day = dueDate.getDate();
const year = dueDate.getFullYear();
const htmlDateTag = `<time datetime="YYYY-MM-DD">${month} ${day}, ${year}</time>`

// 10. log this value using console.log
console.log(htmlDateTag)