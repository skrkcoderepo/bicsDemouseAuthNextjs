import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
import Data from '@/app/dat/staticValue';

const browserCookie = { name: "token" }
const secret = "d#2sdh&23BGfdb#*)";
const siteToken = 'bicsglobal';
const reportTemplate = (val) => {
    return {
        status: val[0],
        data: val[1],
        error: val[2],
        message: val[3]
    }
}
const cyptydata = (val) => {
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(val), String(secret)).toString();
    console.log(ciphertext)
    return ciphertext;
}

const cryptVerify = () => {
    const code = Cookies.get('token');
    if (code) {
        return { status: true, data: true, error: null, message: 'Login success message' }
    } else {
        return { status: false, data: null, error: "Not Logged In", message: "Please login" }
    }
}
export default function TokenCheck(val) {
    console.log("value called", val)
    if (String(val) === 'bicsglobal') {
        const code = cyptydata({ token: siteToken })
        Cookies.set(Data.cookie.name, code)
        return true
    } else { return false }
}

const Logout = () => {
    Cookies.remove(browserCookie.name)
}
export { cyptydata, cryptVerify, Logout }