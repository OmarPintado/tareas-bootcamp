import {
    displayExpenses,
    populateCategoryOptions,
    displayExpensesByCategory,
    Tracker
} from "./src";

(() => {
    'use strict';
    const tracker = new Tracker();
    const form = document.getElementById('expense-form');

    let expenses = tracker.loadExpenses();

    form.addEventListener('submit', (e) => tracker.addExpense(e));


    document.addEventListener('DOMContentLoaded', () => {
        populateCategoryOptions(tracker.categories);
        displayExpenses(expenses);
        displayExpensesByCategory(tracker.getExpensesByCategory());
    });

})()
