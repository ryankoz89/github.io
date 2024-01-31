const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1989, 2017, 1942, 2023, 2055, 2051, 1986]
const times = [20, 21, 16, 14, 15]

const sortStuff = arr => arr.sort((a, b) => b - a);


// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
console.log(sortStuff(years));
console.log(sortStuff(times));

console.log("I like cats.")
