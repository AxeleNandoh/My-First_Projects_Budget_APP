
// CONTROLLER
const itemController = (function () {
    // CONSTRUCTOR
    class item {
        constructor(id, description, amount){
        this.id = id;
        this.description = description;
        this.amount = amount;
    }}
    //data structure
    const data = {
        items: []
    }
    //public method
    return{
        logData: function () {
            return data;
        }
    }
});

//UI CONTROLLER
const UIController = (function(){
    //UI SELECTORS
    const UISelectors = {
        btnEntrate: '#add_income',
        btnSpese: '#add_expense',
        btnDescription: '#description',
        amount: '#amount',
        moneyEarned: '#amount_earned',
        moneyAvailable: '#amount_available',
        moneySpent: '#amount_spent',
        incomeList: '#income_container',
        expensesList: '#expenses_container',
        incomeItem: '.income_amount',
        expenseItem: '.expense_amount',
        itemsContainer: '.items_container'
    }
})