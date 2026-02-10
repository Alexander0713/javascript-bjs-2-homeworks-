// Задача 1: Сравнение массивов
function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

// Задача 2: Получение среднего возраста пользователей одного пола
function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter(user => user.gender === gender);
  return filteredUsers.length ? filteredUsers.reduce((sum, user) => sum + user.age, 0) / filteredUsers.length : 0;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    compareArrays,
    getUsersNamesInAgeRange
  };
}