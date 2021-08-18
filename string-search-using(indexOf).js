const products =
    [
        'dell hardisk 120gb wala laptop',
        'hp 200gb wala laptop',
        'iphn 256gb wala smartphone',
        'purple color phone',
        'toshiba Laptop black color'
    ];
const searching = 'laptop';
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output);