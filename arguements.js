function addNumbers(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const sum = addNumbers(12, 23, 4445, 222, 33, 3);
console.log(sum);


