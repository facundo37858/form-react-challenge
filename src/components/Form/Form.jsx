import { useState } from 'react'
import Modal from '../Modal/Modal'
import {BiErrorCircle} from 'react-icons/bi'
import './style.css'
import validateForm from '../../utils/validatorForm'
import validateSubmit from '../../utils/validateSubmit'



// import { title } from './form.css';
const Form=()=>{
    const [inputs,setInpunts]=useState({
        name:'',
        email:'',
        password:'',
        textarea:''
    })
    const [data,setData]=useState({})
    const [showModal,setShowModal]=useState(false)
    const [errors,setError]=useState({})

    const handleInputChange=(event)=>{
        event.preventDefault()
        const value = event.target.value
        setInpunts({
            ...inputs,
            [event.target.name]:value
        })
        setError(validateForm(inputs))
        // console.log(event.target.name)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(Object.keys(errors).length === 0 && validateSubmit(inputs)){
            handleShowModal()
            setData({
                ...inputs
            })
    
            setInpunts({...inputs,
                name:'',
                email:'',
                password:'',
                textarea:''
            })
        }
        setError(validateForm(inputs))
       
      
    }

    const handleShowModal=()=>{
        setShowModal(showModal=>showModal=!showModal)
    
    }

    const handleBlur=(event)=>{
        handleInputChange(event)
        setError(validateForm(inputs))

    }

    return(
        <>
            <main className='containerForm'>
                <h1>Form</h1>
                <form onSubmit={handleSubmit}>
                    <label for='name'>Name
                        <input
                        type='text' 
                        name='name' 
                        id='name' 
                        className={errors.name ? 'input-form error':'input-form'}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        value={inputs.name}
                        required
                        autoComplete="off"
                        />
                        {errors.name && <span>{errors?.name}<BiErrorCircle className='icon'/></span>}
                        
                    </label>
                    
                    <label for='email'>Email
                        <input 
                        type='email' 
                        name='email' 
                        id='email' 
                        className={errors.email ? 'input-form error':'input-form'}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        value={inputs.email} 
                        required
                        autoComplete="off"
                        />
                        {errors.email && <span>{errors?.email}<BiErrorCircle className='icon'/></span>}
                        
                    </label>
                    <label for='password'>Password
                        <input 
                        type='password' 
                        name='password' 
                        id='password' 
                        className={errors.password ? 'input-form error':'input-form'}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        value={inputs.password} 
                        required
                        autoComplete="off"
                        />
                        {errors.password && <span>{errors?.password}<BiErrorCircle className='icon'/></span>}
                        
                    </label>
                    <label for='textArea'>Text Area
                        <textarea 
                        name="textarea" 
                        id="textArea" 
                        cols="30" 
                        rows="10" 
                        className='input-form'
                        onChange={handleInputChange}
                        value={inputs.textarea}
                        >
                        </textarea>
                    </label>
                    <input 
                    type="submit" 
                    value='Submit'
                    className="btn-form"/>
                    
                </form>
            </main>
            {
                showModal && <Modal data={data} showModalUI={showModal} handleShowModal={handleShowModal}/>
            }
        </>


    )

}
export default Form

