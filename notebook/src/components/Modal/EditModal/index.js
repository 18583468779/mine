import React,{useRef} from 'react'
import Css from './index.module.css';
import Modal from '..';
import formatDataTime from '../../../libs/Date';
export default function EditModal(props) {

const {isShowEditModal,data,submitData} = props,
      inputRef = useRef(),
      checkRef = useRef();

const formatNewData = () =>{
   const val = inputRef.current.value.trim();

   if(val.length === 0){
      inputRef.current.value = data.content;
      return;
   }

   const newData = {
          id: new Date().getTime(),
          content:val,
          completed:checkRef.current.checked
   }

   submitData(newData,data.id)
}
     

    return (
       <Modal
          isShowModal={isShowEditModal}
          modalTitle="编辑事件"
       >
         <p className={Css.topic}>时间：{formatDataTime(data.id)}</p>
         <p className={Css.topic}>
           <textarea ref={inputRef} defaultValue={data.content}>

           </textarea>
         </p>
        
         <p className={Css.topic}>
           状态：
           <input type="checkbox"  defaultChecked={data.completed ? true : false}
                  ref={checkRef}
           />
         </p>
    
        <button onClick={formatNewData}>
          提交
        </button>
       </Modal>
    )
}
