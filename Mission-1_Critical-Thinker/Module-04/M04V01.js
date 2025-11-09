// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

const cacheData = new Map();

const expensiveTask = (id) => {
    console.log('Ran expensive task for:', id);

    return {
        id: id,
        data: `Some Data for ${id}`,
        timestamp: new Date().getTime()
    }
};

const getData = (id) => {
    if (cacheData.has(id)) {
        console.log('Cache Hit for:', id);
        return cacheData.get(id);
    }

    console.log('Cache Miss for:', id);
    const data = expensiveTask(id);
    cacheData.set(id, data);
    
    return data;
}

// console.log(expensiveTask(789));
console.log(cacheData);
console.log(getData(789));
console.log(cacheData);
console.log(getData(789));