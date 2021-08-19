// FUNCTION-ARGUMENTS-WITH-STRING 
function getFullName(firstname, lastname) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('araft', 'hossain', 'arafat', 'hossain');
console.log(name);