import './style.css'
import { AiFillCloseCircle} from 'react-icons/ai'

const Modal=({data,handelShowModal})=>{
    return(
        <article className='modal is-open'>
            <div className='modal-container'>
               <div className='data'>{JSON.stringify(data, null, 2)}</div>
               <button className='modal-close'onClick={handelShowModal}><AiFillCloseCircle className='icon-modal'/></button>
            </div>
        </article>
    )
}
export default Modal