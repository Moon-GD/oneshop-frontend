import { useState } from 'react'
import ModalWork from './ModalWork'
import Backdrop from './Backdrop'

import '../css/WorkContent.css'

function WorkContent() {
    const [modlaIsOpen, setModalIsOpen] = useState(false)

    function deleteHandler() {
        setModalIsOpen(true)
    }

    function closeModalHandler() {
        setModalIsOpen(false)
    }

    return (
        <div className='containerWork'>
            <div className='items'>
                <div className='item'>
                    <div className='image' onClick={deleteHandler}>
                        <img src={require('../images/10.jpg')} alt='작품' />
                    </div>
                </div>
            </div>
            <h5>효창동 김옥희씨/Lee Juntae.HyoChangDong.2022</h5>
            {modlaIsOpen && <Backdrop onClose={closeModalHandler} />}
            {modlaIsOpen && 
                <ModalWork
                    onCancel={closeModalHandler}
                    onConfirm={closeModalHandler}
                />
            }
        </div>
    )
}

export default WorkContent
