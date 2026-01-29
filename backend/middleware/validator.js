const { checkSchema } = require("express-validator");

const RegisterValidator = checkSchema({
  username: {
    in: ["body"],
    isLength: { options: { min: 3 } },
    trim: true,
    errorMessage: "กรุณากรอกชื่อผู้ใช้ 3 ตัวขึ้นไป",
  },
  fullname: {
    in: ["body"],
    trim: true,
    isLength: { options: { min: 5 } },
    errorMessage: "กรุณากรอกชื่อจริงให้ถูกต้อง",
  },
  password: {
    in: ["body"],
    isLength: { options: { min: 8 } },
    errorMessage: "กรุณากรอกรหัสผ่าน 8 ตัาขึ้นไป",
  },
  email: {
    in: ["body"],
    isEmail: true,
    normalizeEmail: true,
    errorMessage: "กรุณากรอกอีเมลให้ถูกต้อง",
  },
});

const LoginValidator = checkSchema({
  email: {
    in: ["body"],
    isEmail: true,
    normalizeEmail: true,
    errorMessage: "กรุณากรอกอีเมลให้ถูกต้อง",
  },
  password: {
    in: ["body"],
    isLength: { options: { min: 8 } },
    errorMessage: "กรุณากรอกรหัสผ่าน 8 ตัาขึ้นไป",
  },
});

module.exports = {RegisterValidator,LoginValidator}