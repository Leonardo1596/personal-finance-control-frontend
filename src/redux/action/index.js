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