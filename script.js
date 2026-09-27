const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("totalDisplay");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
renderExpenses();
let total = 0

function renderExpenses() {
        expenseList.innerHTML = "";
        let total = 0;

        for (let i = 0; i < expenses.length; i++){
            const li = document.createElement("li");
            li.textContent = `${expenses[i].name} - ${expenses[i].amount}`;
            expenseList.appendChild(li);
            total = total + expenses[i].amount;
           
        }
     totalDisplay.textContent = total;
}


addExpenseBtn.addEventListener("click", function() {
    const name = expenseName.value;
    const amount = Number(expenseAmount.value)

    const newExpense = { name: name, amount: amount };
    expenses.push(newExpense);

    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
    
    
    
    expenseAmount.value ="";
    expenseName.value ="";
});