import Expense from "../models/Expense.js";

export const addExpense = async (req, res) => {

  try {

    const { title, amount, category } = req.body;

    const expense = new Expense({
      user: req.user.id,
      title,
      amount,
      category
    });

    await expense.save();

    res.status(201).json(expense);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

export const getExpenses = async (req, res) => {

  try {

    const expenses = await Expense.find({ user: req.user.id });

    res.json(expenses);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};