let accountBalance = 1000;

function checkBalance(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (accountBalance >= amount) {
                resolve('Balance sufficient');
            } else {
                reject('Insufficient funds');
            }
        }, 500);
    });
}

function deductAmount(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (accountBalance >= amount) {
                accountBalance -= amount;
                resolve('Amount deducted');
            } else {
                reject('Deduction failed: Insufficient funds');
            }
        }, 500);
    });
}

function confirmTransaction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Transaction confirmed');
            } else {
                reject('Transaction confirmation failed');
            }
        }, 500);
    });
}

function transferMoney(amount) {
    return checkBalance(amount)
        .then(() => deductAmount(amount))
        .then(() => confirmTransaction())
        .then(() => 'Transaction complete')
        .catch(err => Promise.reject(err));
}

transferMoney(500)
    .then(msg => console.log(msg))
    .catch(err => console.error('Error:', err));

transferMoney(2000)
    .then(msg => console.log(msg))
    .catch(err => console.error('Error:', err));