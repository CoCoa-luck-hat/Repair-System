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

const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const uploads = multer({ storage })

router.get("/ticket", VarifyToken, async (req, res) => {
    try {
        const [row] = await pool.execute("SELECT * FROM `tickets`")
        return res.status(200).json({
            tickets: row
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดบางอย่างจากเซิฟเวอร์'
        });
    }
})
router.get("/ticket/:id", VarifyToken, async (req, res) => {
    try {
        const user_id = req.params.id
        const [row] = await pool.execute("SELECT tickets.*,DATE_FORMAT(tickets.created_at,'%Y-%m-%d') AS TIMEFORMAT,users.fullname,groups.group_name FROM `tickets` INNER JOIN users ON users.user_id = tickets.user_id INNER JOIN `groups` ON groups.group_id = tickets.group_id WHERE tickets.user_id = ?", [user_id])
        return res.status(200).json({
            tickets: row
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดบางอย่างจากเซิฟเวอร์'
        });
    }
})

router.post("/ticket", VarifyToken, uploads.single("fileimage"), async (req, res) => {
    try {
        const { title, description, group_id, user_id } = req.body;

        console.log(req.file)
        const fileimage = req.file ? req.file.filename : null;

        const result = await pool.execute("INSERT INTO `tickets` (`id`, `user_id`, `group_id`, `staff_id`, `title`, `fileimage`, `description`, `status`, `user_rating`, `staff_comment`, `created_at`, `updated_at`) VALUES (NULL, ?, ?, NULL, ?, ?, ?, 'pending', NULL, NULL, CURRENT_TIMESTAMP, NULL)", [
            user_id, group_id, title, fileimage, description
        ])

        return res.status(201).json({
            message: 'แจ้งปัญหาสำเร็จ',
            ticket_id: result.insertId,
            image: fileimage
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดบางอย่างจากเซิฟเวอร์'
        });
    }
})

module.exports = router;
