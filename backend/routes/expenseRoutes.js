import express from "express"
import Expense from "../models/Expense.js"
import authMiddleware from "../middleWare/authMiddleware.js";

const router = express.Router()

// GET all expenses
router.get("/",authMiddleware, async (req,res)=>{
  try{
    const expenses = await Expense.find({user:req.user.id})
    res.json(expenses)
  }catch(err){
    res.status(500).json({message:err.message})
  }
})

// CREATE expense
router.post("/", authMiddleware, async (req,res)=>{
  try{

    const {title,amount,type} = req.body

    const newExpense = new Expense({
      title,
      amount,
      type,
      user: req.user.id   // IMPORTANT FIX
    })

    const savedExpense = await newExpense.save()

    res.json(savedExpense)

  }catch(err){
    res.status(500).json({message:err.message})
  }
})

// DELETE expense
router.delete("/:id",authMiddleware, async (req,res)=>{
  try{

    await Expense.findByIdAndDelete(req.params.id)

    res.json({message:"Expense deleted"})

  }catch(err){
    res.status(500).json({message:err.message})
  }
})

export default router