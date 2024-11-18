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

function sortOnPrice(product1, product2){
    //return product1.price - product2.price;
    return product2.price - product1.price;
}

products.sort(sortOnPrice);

printArray(products);