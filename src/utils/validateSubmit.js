
const validateSubmit=(inputs)=>{
    if(!inputs.name && !inputs.email && !inputs.password){
        return false
    }
    return true

}
export default validateSubmit