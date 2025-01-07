let balance = 0;
let transactions = [];

document.getElementById('addt').addEventListener('click', function() {
  const amount = parseFloat(document.getElementById('amt').value);
  const type = document.getElementById('type').value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (type === 'withdraw' && balance - amount < 0) {
    alert("Insufficient balance for withdrawal.");
    return;
  }

  const currentt = new Date();
  const time = currentt.toLocaleString();
  
  if (type === 'income') balance += amount;
  else balance -= amount;

  transactions.push({ amount, type, time });

  display();
});

function display() {
  document.getElementById('bal').textContent = balance.toFixed(2);

  const transactionList = document.getElementById('transactions');
  transactionList.innerHTML = ''; 

  transactions.forEach((transaction) => {
    const li = document.createElement('li');
    li.className = transaction.type; 
    li.innerHTML = `₹${transaction.amount} - ${capitalize(transaction.type)} at ${transaction.time}`;
    transactionList.appendChild(li);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

