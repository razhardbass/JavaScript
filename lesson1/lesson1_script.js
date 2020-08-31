let money = prompt("Ваш бюджет на месяц?", "" ),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    thing1 = prompt("Введите обязательную статью расходов в этом месяце"),
    price1 = prompt("Во сколько обойдется?"),
    thing2 = prompt("Введите обязательную статью расходов в этом месяце"),
    price2 = prompt("Во сколько обойдется?");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: "",
  income: "",
  savings: false
};

appData.expenses[thing1] = price1;
appData.expenses[thing2] = price2;

let budgetForTheDay = money/30;
alert("Ваш бюджет на день " + budgetForTheDay);

