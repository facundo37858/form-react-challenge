import './style.css'
// import { title } from './form.css';
const Form=()=>{
    return(
        <main className='containerForm'>
            <form>
                <label for='name'>Name
                    <input type='text' className='input-form'/>
                </label>
                <label>Email
                    <input type='email' className='input-form'/>
                </label>
                <label>Password
                    <input type='password' className='input-form'/>
                </label>
                <label>Text Area
                    <textarea name="" id="" cols="30" rows="10" className='input-form'></textarea>
                </label>
                <input type="submit" />
            </form>
    
        </main>
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
