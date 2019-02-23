let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesInputs = document.getElementsByClassName('expenses-item'),
    // добавление кнопок по порядку
    approveBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    calculateBtn = document.getElementsByTagName('button')[2];
    // 
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    // Добавление даты
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    // 
    let money,time;

    startBtn.addEventListener('click', function(){
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        money = +prompt("Ваш бюджет на месяц?", "");
         
     
        while(isNaN(money)|| money == null || money == "" ){
            money = +prompt("Ваш бюджет на месяц?", "");
        }

        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
    });

    approveBtn.addEventListener('click' , function(event){
        if (appData.budget == undefined || appData.timeData == undefined) {
            event.preventDefault();
        }
        else{
            let sum = 0;

            for (i = 0; i < expensesInputs.length ; i++){
                let firstQ = expensesInputs[i].value,
                    secondQ = expensesInputs[++i].value;
            
                if ( (typeof(firstQ)) === 'string' && (typeof(firstQ)) != null && (typeof(secondQ)) != null && firstQ != "" && 
                    secondQ != "" && firstQ.length < 50) {
                    appData.expenses[firstQ] = secondQ;
                    sum += +secondQ;
                }
                else {
                    i = i-1 ;
                }
            }
    
            expensesValue.textContent = sum;
        }
    });

    optionalexpensesBtn.addEventListener('click', function(){
        if (appData.budget == undefined || appData.timeData == undefined) {
            event.preventDefault();
        }
        else{
            for (let i = 0; i < optionalExpensesItem.length; i++){
                let opt = optionalExpensesItem[i].value;
                appData.optionalExpenses[i] = opt;
                optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
            }
        } 
    });
    calculateBtn.addEventListener('click', function(){
        if (appData.budget == undefined || appData.timeData == undefined) {
            event.preventDefault();
        }
        else{
            if (appData.budget != undefined){
                let sum ;
                expensesValue.innerHTML = Number(expensesValue.innerHTML);
                sum = expensesValue.innerHTML;
                appData.dayBudget = ((appData.budget - sum)/30).toFixed(); 
                daybudgetValue.textContent = appData.dayBudget;
    
                if (appData.dayBudget < 100){
                    levelValue.textContent = 'Минимальный уровень достатка';
                }
                else if(appData.dayBudget > 100 && appData.dayBudget < 2000){
                    levelValue.textContent = 'Средний уровень достатка';
                }
                else if(appData.dayBudget > 2000){
                    levelValue.textContent = 'Высокий уровень достатка';
                }
                else{
                    levelValue.textContent = 'Произошла ошибка';
                }
            }
            else{
                daybudgetValue.textContent = 'Произошла ошибка';
            }
        }
    });

    chooseIncome.addEventListener('input', function(){
        if (appData.budget == undefined || appData.timeData == undefined) {
            event.preventDefault();
        }
        else{
            let items = chooseIncome.value;
            appData.income = items.split(", ");
            incomeValue.textContent = appData.income;
        }
    });

    checkSavings.addEventListener('click' , function(){
        if (appData.budget == undefined || appData.timeData == undefined) {
            event.preventDefault();
        }
        else{
            if (appData.savings == true){
                appData.savings = false;
            }
            else{
                appData.savings = true;
            }
        }
    });

    sumValue.addEventListener('input', function(){
        if(appData.savings == true){
            let sum = +sumValue.value;
                percent = +percentValue.value;

            appData.monthInCome = sum/100/12 * percent; 
            appData.yearInCome = sum/100 * percent;
            
            monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
            yearSavingsValue.textContent = appData.yearInCome.toFixed(1);
        }
    });

    percentValue.addEventListener('input', function(){
        if(appData.savings == true){
            let sum = +sumValue.value;
            percent = +percentValue.value;

            appData.monthInCome = sum/100/12 * percent; 
            appData.yearInCome = sum/100 * percent;
            
            monthSavingsValue.textContent = appData.monthInCome.toFixed(1);
            yearSavingsValue.textContent = appData.yearInCome.toFixed(1);
        }
    });
    
    let appData = {
        budget : money,
        timeData : time,
        expenses: {},
        optionalExpenses: {},
        income : [],
        savings : false
    };
 
