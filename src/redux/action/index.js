// For check if user is logged in
export const setAuth = (auth) => {
    return {
        type: 'ISLOGGEDIN',
        payload: auth
    }
}


// For save user info
export const setUser = (user) => {
    return {
        type: 'SETUSER',
        payload: user
    }
}


// For delete user info
export const removeUser = (user) => {
    return {
        type: 'REMOVEUSER',
        payload: user
    }
}


// Get transactions
export const getTransactions = (transactions) => {
    return {
        type: 'GETTRANSACTIONS',
        payload: transactions
    }
}

// Add transaction
export const addTransaction = (transaction) => {
    return {
      type: 'ADDTRANSACTION',
      payload: transaction
    }
  }


// Edit transaction
export const updateTransaction = (updatedTransaction) => {
    return {
      type: 'UPDATETRANSACTION',
      payload: updatedTransaction
    }
}


// Remove transaction
export const removeTransaction = (id) => {
    return {
        type: 'REMOVETRANSACTION',
        payload: id
    }
}


// For change current value visibility
export const setCurrentValueVisibility = (prop) => {
    return {
        type: 'SETCURRENTVALUEVISIBILITY',
        payload: prop
    }
}