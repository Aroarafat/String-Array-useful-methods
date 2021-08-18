const products =
    [
        'dell hardisk 120gb wala laptop',
        'hp 200gb wala laptop',
        'dell 256gb wala smartphone',
        'purple color phone',
        'dell Laptop black color',
        'toshiba Laptop black color dell',
        'Dell purple color phone',

    ];
const searching = 'dell';
const output = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);