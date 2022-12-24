// "Pure" function:

function sum(a, b) {
  return a + b;
}


// "Impure" function (it changes its own input):
function withdraw(account, amount) {
  account.total -= amount;
}

// !!! Important rule: All React components must act like pure functions with respect to their props.
