let money,time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
 
    while(isNaN(money)|| money == null || money == "" ){
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false,
    chooseExpenses: function(){
        for (i = 0; i < 2 ; i++){
            let firstQ = prompt("Введите обязательную статью расходов в этом месяце", "");
            let secondQ = prompt("Во сколько обойдется?", "");
        
            if ( (typeof(firstQ)) === 'string' && (typeof(firstQ)) != null && (typeof(secondQ)) != null && firstQ != "" && 
                secondQ != "" && firstQ.length < 50) {
                appData.expenses[firstQ] = secondQ;
                console.log("done");
            }
            else {
                i = i-1 ;
            }
        }
    },
    detectDayBudget: function(){
        appData.dayBudget = appData.budget/30;
        alert("Ваш бюджет на 1 день равен " + appData.dayBudget);
    },
    questionSavings: function(){
        let save = confirm("Есть ли у вас сбережения ?(Если -да , нажмите ОК)");
        if ( save == true ){
            appData.savings = true;
        }
        else{
            alert("Досвидания !");
        }
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("Какова сумма ваших сбережений ?", ""),
                per = +prompt("Под какой процент ?", "");
    
        appData.monthInCome = save/100/12 * per;        
        alert("Доход в месяц с вашего депозита " + appData.monthInCome);
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход (перечислите через запятую)", "");

        while (items == null || items == "" || typeof(items) != "string"){
            items = prompt("Что принесет дополнительный доход (перечислите через запятую)", "");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("может что-то ещё?"));
        appData.income.sort();

        appData.income.forEach(function(i){
            alert("Способы доп. заработка: " + i);
        }) 
    },
    showData: function(){
        for (let key in appData){
            console.log("Наша программа включает в себя данные: " + key );
        }
    }
};
 


 
  

 