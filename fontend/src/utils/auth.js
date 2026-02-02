import { jwtDecode } from "jwt-decode";

const getDecodedToken = ()=>{
    const token = localStorage('token')
    if(!token){
        return false
    }else{
        try {
            const decode = jwtDecode(token)
        } catch (error) {
            return null   
        }
    }
}

const isTokenExpired = ()=>{
    const decode = getDecodedToken()
    if(!decode){
        return true
    }else{
        const currentTime = Date.now() / 1000
        return decode.exp > currentTime
    }
}

const getUserFromToken = ()=>{
    const decoded = getDecodedToken()
    return decoded || null
}