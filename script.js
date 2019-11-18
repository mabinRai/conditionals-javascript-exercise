// 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older ,
//  give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for. Output:

function checkAge(age) {
  age = prompt("enter your age ");
  timeToDrive = Math.abs(age - 18);

  if (age >= 18) {
    alert("You are old enough to drive");
  } else {
    alert(`You are not allowed to drive. Wait for ${timeToDrive} years.`);
  }
}

// checkAge();
