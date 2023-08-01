let promessa = Promise.resolve(5)

console.log('Outro código')
console.log(promessa)

promessa.then((value) => {console.log(value)})