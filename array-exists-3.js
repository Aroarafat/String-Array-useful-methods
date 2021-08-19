function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return ('please provide an array');
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.lenght > mega.length) {
            mega = friend;
        }
    }
    return (mega);
}
const friends = ['arafat', 'abir', 'arif', 'asif'];
const myBigBuddy = megaFriend(friends);

// arif-ACHE-KINA-CHECK-KORAR JONNO 


if (friends.includes('arif')) {
    console.log('arif exist');
}