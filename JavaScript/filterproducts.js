let products = [
    {
        name: 'Adidas Alphabounce',
        price: 5000
    },
    {
        name: 'Sandisk USB',
        price: 300
    },
    {
        name: 'Adidas Ultraboost',
        price: 8000
    },
    {
        name: 'Samsung OLED TV',
        price: 50000
    },
    {
        name: 'Cadbury 5 Star',
        price: 10
    },
]

function printArray(array){
    for(let item of array){
        console.log(item);
    }
}

function filterByPrice(product){
    return (product.price > 7000);
}

let result = products.filter(filterByPrice);

printArray(products);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")

printArray(result);