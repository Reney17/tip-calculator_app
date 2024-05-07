//Default Variables

let billAmount = 0.0;
let tipPercent = 0;
let numPeople = 1;
let tipAmountPerPerson = 0;
let totalPerPerson = 0;

// Calculate Tip Amount

function calculateTipAmount() {
  // Bill
  billAmount = document.getElementById("bill_amount").value;
}
// Add EventListeners to Options
const tipOptions = document.getElementsByClassName("option");
for (let index = 0; index < tipOptions.length; index++) {
  const option = tipOptions[index];

  option.addEventListener("click", () => {
    alert("option.textContent");
  });
}
