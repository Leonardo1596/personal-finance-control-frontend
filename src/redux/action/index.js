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

export const showExpensePopup = (visibility) => {
    return {
        type: 'ISEXPENSEPOPUPVISIBLE',
        payload: visibility
    }
}

export const showPopup = (visibility) => {
    return {
        type: 'SHOWPOPUP',
        payload: visibility
    }
}

export const setAccountId = (accountId) => {
    return {
        type: 'DELETEACCOUNT',
        payload: accountId
    }
}

export const setTransactionId = (transactionId) => {
    return {
        type: 'SETTRANSACTIONID',
        payload: transactionId
    }
}

  export const transactionType = (type) => {
    return {
      type: 'SETTYPE',
      payload: type
    }
  }