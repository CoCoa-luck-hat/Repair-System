const express = require("express")
const router = express.Router()
const { LoginValidator, RegisterValidator } = require("../middleware/validator")
const { VarifyToken } = require("../middleware/varifytoken")
const { pool } = require("../database/mysql")
const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")

router.post("/register", RegisterValidator, async (req, res) => {
    const Validator_error = validationResult(req)
    if (!Validator_error.isEmpty()) {
        return res.status(400).json({
            Validator_error: Validator_error.array()
        })
    }
    try {
        const { username, fullname, password, email } = req.body
        const [row] = await pool.execute("SELECT * FROM `users` WHERE email = ?", [email])
        if (row.length >= 1) {
            return res.status(400).json({
                message: "อีเมลนี้ถูกใช้ไปแล้ว"
            })
        } else {
            const response = await pool.execute("INSERT INTO `users` (`user_id`, `username`, `password`, `fullname`, `email`, `role`, `created_at`) VALUES (NULL, ?, ?, ?, ?, 'user', CURRENT_TIMESTAMP)", [username, password, fullname, email])
            return res.status(201).json({
                message: "สมัครสมาชิกสำเร็จ"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "เกิดข้อผิดพลาดบางอย่างจากเซิฟเวอร์"
        })
    }
})

router.post("/login", LoginValidator, async (req, res) => {
    const Validator_error = validationResult(req)
    if (!Validator_error.isEmpty()) {
        return res.status(400).json({
            Validator_error: Validator_error.array()
        })
    } else {
        try {
            const { email, password } = req.body
            const [row] = await pool.execute("SELECT * FROM `users` WHERE email = ? AND password = ?", [email, password])
            if (row.length >= 1) {
                const token = jwt.sign({ user_id: row[0].user_id, email: row[0].email, role: row[0].role }, process.env.TOKEN_KEY, { expiresIn: "1h" })
                return res.status(200).json({
                    token: token,
                    user: row[0],
                    message:'เข้าสู'
                })
            } else {
                return res.status(404).json({
                    message: "อีเมลหรือรหัสผ่านผิด"
                })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "เกิดข้อผิดพลาดบางอย่างจากเซิฟเวอร์"
            })
        }
    }
})


module.exports = router