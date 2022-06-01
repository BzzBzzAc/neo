let inpName = document.querySelector('.user_name').value
let inpPass = document.querySelector('.user_pass').value

class Users{
    constructor(userName, userPass){
        this.userName = userName
        this.userPass = userPass
    }
    validatePassword() {
        if (this.userName === 'neo' && this.userPass === 'dentica'){
            return location.href = 'https:google.com'
        } 
            return false   
    }
}
const person = new Users(inpName, inpPass)