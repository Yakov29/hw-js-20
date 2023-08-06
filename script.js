const users = [
  {
    id: 1,
    name: "John",
    balance: 100,
    friends: ["Mike", "Anna", "Elena"],
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    name: "Mike",
    balance: 150,
    friends: ["John", "Anna"],
    skills: ["JavaScript", "Python", "Java"],
  },
];
// Завдання 1
// const totalBalance = users.reduce((acc, {balance}) => {
//   return balance + acc
// }, 0)
// console.log(totalBalance)
  

  // Завдання 2
//   function getUsersWithFriend(users, friendName) {
//     return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
//   }
  
//   const friendName = "Mike";
//   const usersWithFriend = getUsersWithFriend(users, friendName);
//   console.log(`Користувачі, у яких є друг ${friendName}:`, usersWithFriend);
  

// Завдання 3

// function sortUsersByFriendsCount(users) {
//     return users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
//   }
  
//   const usersSortedByFriendsCount = sortUsersByFriendsCount(users);
//   console.log("Користувачі, відсортовані за кількістю друзів:", usersSortedByFriendsCount);


// Завдання 4
// const skills = users.filter(({skills}, index, users) => {
//   const usersIndex = users.indexOf(...skills) === index;
//   return usersIndex;
// })
// console.log(skills)

// const skills = users.map((user) => 
//    user.skills
// )
// console.log(skills)
// function test (a) {
  
// }





