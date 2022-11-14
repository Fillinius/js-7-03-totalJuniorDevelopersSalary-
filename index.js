const salaryOfJuniorDeveloper = 500
const numberOfJuniorDevelopers = 3
let taxPercentage = 13
let totalJuniorDevelopersSalary = 0
console.log(totalJuniorDevelopersSalary)

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  const salaryWithTax =
    salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100
  console.log(salaryWithTax)
  totalJuniorDevelopersSalary += salaryWithTax
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary)

// salary With Tax             зарплата с Учетом Налогов
// salary Of Junior Developer  зарплата Младшего Разработчика
// number Of Junior Developers количество Младших Разработчиков
// tax Percentage              налоговый процент
// totalJuniorDevelopersSalary от общей суммы заработной платы юниоров
