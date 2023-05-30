import Modal from '../components/Modal'
import Button from '../components/Button'
import { useState } from 'react'

function ModalPage(){
    const [showModal,setShowModal]=useState(false)
 
    const handleClick =()=>{
        setShowModal(true)
    }
    const handleClose=()=>{
        setShowModal(false)
    }
   const modal = <Modal onClose={handleClose} actionBar={<Button onClick={handleClose} primary>I accept</Button>}>
    <p>Hereree</p>
   </Modal>
    return(
    <div className='relative'>
    <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal }
    </div>
 )
}
export default ModalPage