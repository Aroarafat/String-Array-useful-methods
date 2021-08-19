const myFavDate = new Date('1999-03-28');
// console.log(myFavDate);

const anotherDate = new Date(1999, 3, 12, 11, 20, 45, 46);
// console.log(anotherDate);

if (myFavDate.getTime() < anotherDate.getTime()) {
    console.log('another date is bigger');
}
