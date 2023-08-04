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
//   function getUsersWithFriend(users, friendName) {
//     return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
//   }
  
//   const friendName = "Mike";
//   const usersWithFriend = getUsersWithFriend(users, friendName);
//   console.log(`Користувачі, у яких є друг ${friendName}:`, usersWithFriend);
  

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
// function getAllUniqueSkills(users) {
//     const allSkills = users.flatMap(user => user.skills);
//     const uniqueSkills = [...new Set(allSkills)];
//     return uniqueSkills.sort();
//   }
  

//   const allUniqueSkills = getAllUniqueSkills(users);
//   console.log("Усі унікальні уміння користувачів:", allUniqueSkills);
  