import React,{useState} from 'react'
import { Calendar, Clock, DollarSign, Percent } from 'lucide-react';

const Modal = ({selectedIndex, setOpenModal,  openModal }) => {
  
  return (
    <div className={`modal ${openModal ? "open-modal" : ""}`} >
      <div className="modal-content" >
        <span onClick={() => setOpenModal(false)} className='close-modal'>&times;</span>
          
      </div>
    </div>
  )
};

export default Modal;