import React,{} from 'react'
import Css from './index.module.css';
export default function Modal(props) {


    const {isShowModal,modalTitle,children} = props;     
    return (
       <>
         {
             isShowModal ? 
             (
                 <div className={Css.modal}>
                    <div className={Css.frosted}></div>
                    <div className={Css.inner}>
                        <div className={Css.h_title}>{modalTitle}</div>
                        <div className={Css.content}>{children}</div>
                    </div>
                 </div>
             )
             :
             ''
         }
       </>
    )
}
