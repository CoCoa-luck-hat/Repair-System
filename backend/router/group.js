const express = require("express");
const router = express.Router();
const {
  LoginValidator,
  RegisterValidator,
} = require("../middleware/validator");
const { VarifyToken } = require("../middleware/varifytoken");
const { pool } = require("../database/mysql");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

router.get("/group",async(req,res)=>{
    try {
        const [row] = await pool.execute("SELECT * FROM `groups`")
        return res.status(200).json({
            group:row
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'เกิดข้อผิดพลาดบางอย่างจากเซิฟเวอร์'
        })
    }
})

module.exports = router;
