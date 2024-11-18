let user = {
    name: 'John Watson',
    email: 'john@example.com',
    phone: '+91 99999 11111',
    address: {
        adrsLine: '2144 Redwood Shores',
        city: 'Banaglaore',
        zipCode: 520001
    },
    orders:[
        {
            oid: 1,
            amount: 2000,
            date: '20th Nov, 2021'
        },
        {
            oid: 11,
            amount: 1000,
            date: '25th Nov, 2021'
        }
    ]
}

console.log(user);
console.log(typeof user);

console.log("User name is: "+user.name);
console.log("Orders Place are: "+user['orders'][0]['amount']);

const product = {
    pid: 101,
    name: 'Alphabounce',
    brand: 'Adidas',
    price: 5000,
    inventory: [
        {
            size: 7,
            units: 9
        },
        {
            size: 8,
            units: 3
        },
        {
            size: 9,
            units: 0
        },
    ]
}

console.log(product);
// Updating the Product Data
product.inventory[0].units = 7
console.log(product);

// Below will be an error
/*product = {
    pid: 201
}*/

