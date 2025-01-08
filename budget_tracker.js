let balance = 0;
let transactions = [];

document.getElementById('addt').addEventListener('click', function() {
  const amount = parseFloat(document.getElementById('amt').value);
  const type = document.getElementById('type').value;

  if (isNaN(amount) || amount <= 0) {
    showAlert("Please enter a valid amount.");
    return;
  }

  if (type === 'withdraw' && balance - amount < 0) {
    showAlert("Insufficient balance for withdrawal.");
    return;
  }

  const currentt = new Date();
  const time = currentt.toLocaleString();
  
  if (type === 'income') balance += amount;
  else balance -= amount;

  transactions.unshift({ amount, type, time });

  display();
  hideAlert();
});

function display() {
  document.getElementById('bal').textContent = balance;

  const transactionl = document.getElementById('transactions');
  transactionl.innerHTML = ''; 

  transactions.forEach((transaction) => {
    const li = document.createElement('li');
    li.className = transaction.type; 
    li.innerHTML = `₹${transaction.amount} - ${capitalize(transaction.type)} at ${transaction.time}`;
    transactionl.appendChild(li); 
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function showAlert(message) {
  const alertmsg = document.getElementById('alert-message');
  alertmsg.textContent = message;
  alertmsg.style.display = 'block'; 
}

function hideAlert() {
  const alertmsg = document.getElementById('alert-message');
  alertmsg.style.display = 'none'; 
}
