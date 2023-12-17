import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
import data from '@/app/dat/staticValue'
const browserCookie = { name: "token" }
const jwtsecret="d#2sdh&23BGfdb#*)";
const siteToken= 'bicsglobal';
const reportTemplate = (val) => {
    return {
        status: val[0],
        data: val[1],
        error: val[2],
        message: val[3]
    }
}
const cyptydata =(val) => {
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(val), 'my-secret-key@123').toString();
    console.log(ciphertext)
    return ciphertext;
}

const cryptVerify= () => {
console.log(Cookies.get(data.cookie.name)) 
}
export default  function TokenCheck(val){
    console.log("value called", val)
    if(String(val)==='bicsglobal'){
        const code = cyptydata({token: siteToken})
        Cookies.set(browserCookie.name, code)
        return true
    } else { return false}
}

const Logout = ()=>{
    Cookies.remove(browserCookie.name)
}
export {cyptydata, cryptVerify, Logout}