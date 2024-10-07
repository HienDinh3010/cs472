const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject({ prime: false });
                return;
            }
        }

        resolve({ prime: true });
    }) 
}

// console.log('start');
// isPrime(7)
//     .then(console.log)
//     .catch(console.error);
// console.log('end');
//    // start
//    // end
//    // { prime: true }
// console.log('start');
// isPrime(10)
//     .then(console.log)
//     .catch(console.error)
// console.log('end');

// Make changes to provided test and use async/await instead of .then() and .catch()
console.log('start - use async/await');
const testIsPrime = async(n) => {
    try {
        const result = await(isPrime(n));
        console.log(result);
    } catch(error) {
        console.error(error);
    }
}
testIsPrime(7);
testIsPrime(9);
console.log('end - use async/await');