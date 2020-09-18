const getUser = () => {
    const existingUser = sessionStorage.getItem('userId');
    if (existingUser) {
        return existingUser; 
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userId', newUser)
        return newUser;
    }
}


const getDataKey = () => {
    const userId = getUser();
    return `emaJohn/carts/${userId}`
}

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const dataKey = getDataKey();
    const data = localStorage.getItem(dataKey) || "{}";
    return JSON.parse(data);
}

const addToDatabaseCart = (Key, count) => {
    const currentCart = getDatabaseCart();
    currentCart[Key] = count;
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const removeFromDatabaseCart = Key => {
    const currentCart = getDatabaseCart();
    delete currentCart[Key];
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const processOrder = (cart) => {
    localStorage.removeItem(getDataKey());
}


export { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder };


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
  let store = {}
  return {
    getItem(Key) {
      return store[Key]
    },
    setItem(Key, value) {
      store[Key] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()

const sessionStorage = window.sessionStorage || (() => {
  let store = {}
  return {
    getItem(Key) {
      return store[Key]
    },
    setItem(Key, value) {
      store[Key] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()
// end of poly fill