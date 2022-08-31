const validateForm=(inputs)=>{
    let errors={}
    
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    // const regexComments = /^.{1,255}$/;
    if(!inputs.name.trim()){
        errors.name='Required name'
    }else if( inputs.name.trim().length < 8){
        errors.name='Name must be more than 8 characters'
    }
    if(!inputs.email.trim()){
        errors.email='Required email'
    }else if(!regexEmail.test(inputs.email.trim())){
        errors.email='Invalid email'
    }
    if(!inputs.password.trim()){
        errors.password='Required password'
    }else if( inputs.password.trim().length < 4){
        errors.password='Password must be more than 4 characters'
    }
  
    return errors
}
export default validateForm