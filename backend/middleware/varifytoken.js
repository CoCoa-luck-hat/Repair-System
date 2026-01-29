const jwt = require("jsonwebtoken")

const VarifyToken = (req,res,next)=>{
    const anthHead = req.headers["authorization"]
    const token = anthHead && anthHead.slice[1]
    if(!token){
        return res.status(401).json({
            message:"ไม่มี Token"
        })
    }else{
        try {
            const decode = jwt.verify(token,process.env.TOKEN_KEY)
            req.user = decode
            req.token = token
            next()
        } catch (error) {
            return res.status.json({
                message:"Token หมดอายุ"
            })
        }
    }
}

module.exports = {VarifyToken}