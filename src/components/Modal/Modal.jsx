import './style.css'
import { AiFillCloseCircle} from 'react-icons/ai'

const Modal=({data,handelShowModal})=>{
    console.log(JSON.stringify(data, null, 2))
    const showData=(data)=>{
        let arrdata=[]
        for(let val in data){
            arrdata=[...arrdata,data[val]]
        }
        return arrdata
    }
    
    return(
        <article className='modal is-open'>
            <div className='modal-container'>
              {/* {showData(data).map((e,index)=>{
                return(
                    <p key={index}>{e}</p>
                )
              })} */}
              <div className='data'>{JSON.stringify(data, null, 2)}</div>
            
                <button className='modal-close'onClick={handelShowModal}><AiFillCloseCircle className='icon-modal'/></button>
            </div>
        </article>
    )
}
export default Modal