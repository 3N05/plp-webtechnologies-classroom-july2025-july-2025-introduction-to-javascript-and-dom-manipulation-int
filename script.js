// =========================
// Part 1: Variables & Conditionals
// =========================

// Example of using variables, conditionals, and DOM output
function checkAge() {
  let age = document.getElementById("userAge").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are an adult.";
  } else {
    result.textContent = "❌ You are underage.";
  }
}

// =========================
// Part 2: Functions
// =========================

// Reusable function to add two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function to display the sum
function showSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = calculateSum(num1, num2);

  document.getElementById("sumResult").textContent = "Sum: " + sum;
}

// Another function: format a string
function formatGreeting(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// =========================
// Part 3: Loops
// =========================

// Countdown using a for loop
function countdown() {
  let result = "";
  for (let i = 5; i >= 1; i--) {
    result += i + " ";
  }
  document.getElementById("countdownResult").textContent = result;
}

// Example of while loop
let fruits = ["Apple", "Banana", "Cherry"];
let i = 0;
while (i < fruits.length) {
  console.log("Fruit: " + fruits[i]);
  i++;
}

// =========================
// Part 4: DOM Manipulation
// =========================

// Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Dynamically add list items
function addListItem() {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
}
