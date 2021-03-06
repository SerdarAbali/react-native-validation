export const ValidationRules = (value, rules, form)=>{
    let valid = true
    for(let rule in rules) {
        switch(rule){
            case "isRequired":
                valid = valid && validateRequired(value)
                break
            case "isEmail":
                valid = valid && validateEmail(value)
                break
            case "minLength":
                valid = valid && validateMinLength(value, rules[rule])
                break
            case "confirmPass":
                valid = valid && validateconfirmPass(value, form[rules.confirmPass].value)
            default:
                valid = true
                }
            }
            return valid
        }

const validateRequired = value => {
    if (value !== ''){
         return true
    }else false
}

const validateEmail = email => {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return expression.test(String(email).toLocaleLowerCase())

}

const validateMinLength = (value, ruleValue) => {
    if(value.length >= ruleValue){
        return true
    }
    return false
}

const validateconfirmPass = (confirmPass, pass) => {
    return confirmPass === pass
}

