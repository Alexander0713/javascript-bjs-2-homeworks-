"use strict";

// Задача 1: Квадратные уравнения
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant < 0) {
    return arr;
  }
  
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }
  
  const sqrtD = Math.sqrt(discriminant);
  arr.push((-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a));
  return arr;
}

// Задача 2: Ипотечный калькулятор
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;
  const loanBody = amount - contribution;
  
  if (loanBody <= 0) {
    return 0;
  }
  
  const monthlyPayment = loanBody * 
    (monthlyPercent + 
     (monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1)));
  
  const totalAmount = monthlyPayment * countMonths;
  return Math.round(totalAmount * 100) / 100;
}
