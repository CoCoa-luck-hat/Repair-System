import { jwtDecode } from 'jwt-decode'

/**
 * ตัวอย่างการใช้งาน jwt-decode
 */

// ฟังก์ชันสำหรับดึงข้อมูลจาก token
export function getUserFromToken(token) {
    try {
        const decoded = jwtDecode(token)
        return decoded
    } catch (error) {
        console.error('Token ไม่ถูกต้อง:', error)
        return null
    }
}

// ฟังก์ชันตรวจสอบว่า token หมดอายุหรือยัง
export function isTokenExpired(token) {
    try {
        const decoded = jwtDecode(token)
        const currentTime = Date.now() / 1000 // แปลงเป็นวินาที

        // ถ้า exp (expiration time) น้อยกว่าเวลาปัจจุบัน = หมดอายุ
        return decoded.exp < currentTime
    } catch (error) {
        return true // ถ้า decode ไม่ได้ ถือว่าหมดอายุ
    }
}

// ฟังก์ชันดึง userId จาก token
export function getUserId(token) {
    try {
        const decoded = jwtDecode(token)
        return decoded.userId || decoded.id || decoded.sub
    } catch (error) {
        return null
    }
}

// ฟังก์ชันดึง role จาก token
export function getUserRole(token) {
    try {
        const decoded = jwtDecode(token)
        return decoded.role || decoded.roles
    } catch (error) {
        return null
    }
}
