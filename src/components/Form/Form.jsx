import { useState } from 'react'
import Modal from '../Modal/Modal'
import './style.css'

// import { title } from './form.css';
const Form=()=>{
    const [inputs,setInpunts]=useState({
        name:'',
        email:'',
        password:'',
        textarea:''
    })
    const [showModal, setShowModal]=useState(false)

    const handelInputChange=(event)=>{
        event.preventDefault()
        const value = event.target.value
        setInpunts({
            ...inputs,
            [event.target.name]:value
        })
        // console.log(event.target.name)
    }

    const handelSubmit=(event)=>{
        event.preventDefault()
        handelShowModal()
        alert(JSON.stringify(inputs))
    }

    const handelShowModal=()=>{
        setShowModal(showModal=>showModal=!showModal)
    }



    return(
        <>
            <main className='containerForm'>
                <form onSubmit={handelSubmit}>
                    <label for='name'>Name
                        <input
                        type='text' 
                        name='name' 
                        id='name' 
                        className='input-form' 
                        onChange={handelInputChange}
                        value={inputs.name}
                        required
                        />
                    </label>
                    <label for='email'>Email
                        <input 
                        type='email' 
                        name='email' 
                        id='email' 
                        className='input-form'
                        onChange={handelInputChange}
                        value={inputs.email} 
                        required/>
                    </label>
                    <label for='password'>Password
                        <input 
                        type='password' 
                        name='password' 
                        id='password' 
                        className='input-form'
                        onChange={handelInputChange}
                        value={inputs.password} 
                        required/>
                    </label>
                    <label for='textArea'>Text Area
                        <textarea 
                        name="textarea" 
                        id="textArea" 
                        cols="30" 
                        rows="10" 
                        className='input-form'
                        onChange={handelInputChange}
                        value={inputs.textarea}
                        >
                        </textarea>
                    </label>
                    <input type="submit" value='Submit'/>
                </form>
            </main>
            {
                showModal && <Modal/>
            }
        </>


    )

}
export default Form

{/* <form>
<label for="nameLastname">Nombre y Apellido</label>
<input type="text" id="nameLastname" class="input-padron" required>

<label for="email">Email</label>
<input type="email" id="email" class="input-padron" placeholder="email@dominio.com" required>

<label for="telefono">Telefono</label>
<input type="tel" id="telefono" class="input-padron" placeholder="(XXXX)XXXXX" required>

<label for="mensaje">Mensaje</label>
<textarea id="mensaje" cols="65" rows="10" class="input-padron" required></textarea>

<fieldset>
    <legend>Forma de contacto:</legend>

    <label for="email-radio">
        <input type="radio"  id="email-radio" name="contacto" value="email">
        Email
    </label>
    

    <label for="telefono-radio">
        <input type="radio"  id="telefono-radio" name="contacto" value="tel">
        Tel
    </label>
    

    <label for="wapp-radio">
        <input checked type="radio"  id="wapp-radio" name="contacto" value="whatsapp">
        Whatsapp
    </label>
    
</fieldset>

<fieldset>
    <legend>Seleccione horario preferencial</legend>
    <select name="" id="">
        <option value="mahana">Mañana</option>
        <option value="tarde">Tarde</option>
        <option value="noche">Noche</option>
    </select>
</fieldset>

<label class="checkbox" >¿Quiere recibir novedades?<input checked type="checkbox"></label>


<input class="btn-submit" type="submit" value="Enviar formulario">


</form> */}
